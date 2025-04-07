import os
import mimetypes
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse
from api.routers import contact, portfolio, reviews, services
from api.database import init_db

# Add proper MIME types for JavaScript modules
mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("application/javascript", ".mjs")
mimetypes.add_type("application/javascript", ".ts")
mimetypes.add_type("application/javascript", ".tsx")
mimetypes.add_type("text/css", ".css")

app = FastAPI(title="다나와 행신센터 API", description="컴퓨터 출장 수리 및 렌탈 서비스 API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, this should be restricted
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routers
app.include_router(contact.router, prefix="/api", tags=["contact"])
app.include_router(portfolio.router, prefix="/api", tags=["portfolio"])
app.include_router(reviews.router, prefix="/api", tags=["reviews"])
app.include_router(services.router, prefix="/api", tags=["services"])

# Startup event
@app.on_event("startup")
async def startup_event():
    # Initialize database connection
    init_db()
    print("Database initialized")
    print("FastAPI server started. Serving on http://0.0.0.0:5000")

# Mount static files from the built frontend
app.mount("/assets", StaticFiles(directory="dist/assets"), name="assets")

# For SPAs, serve index.html for any unmatched routes
@app.get("/", response_class=HTMLResponse)
async def read_root():
    # Make sure the path is correct and exists
    if os.path.exists("dist/index.html"):
        return FileResponse("dist/index.html")
    else:
        # For debugging
        return HTMLResponse(f"<html><body><h1>Error</h1><p>Cannot find index.html. Current directory: {os.getcwd()}, Files in dist: {os.listdir('dist') if os.path.exists('dist') else 'dist directory not found'}</p></body></html>")

@app.get("/{full_path:path}", include_in_schema=False)
async def serve_spa(full_path: str):
    # First check if it's an asset
    if full_path.startswith("assets/"):
        asset_path = os.path.join("dist", full_path)
        if os.path.exists(asset_path) and os.path.isfile(asset_path):
            return FileResponse(asset_path)
    
    # Check if it's a file in the dist directory
    file_path = os.path.join("dist", full_path)
    if os.path.exists(file_path) and os.path.isfile(file_path):
        return FileResponse(file_path)
    
    # If file doesn't exist, it's a frontend route, serve index.html
    if os.path.exists("dist/index.html"):
        return FileResponse("dist/index.html")
    else:
        return HTMLResponse(f"<html><body><h1>Error</h1><p>Cannot find index.html for route: {full_path}</p></body></html>")

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
