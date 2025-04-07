"""
Contact API router - handles contact form submissions.
"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field, EmailStr

router = APIRouter()

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=10, max_length=20)
    service: str = Field(None, max_length=100)
    message: str = Field(..., min_length=10, max_length=1000)

@router.post("/contact")
async def submit_contact_form(contact_data: ContactRequest):
    """
    Handle contact form submission.
    In a real implementation, this would store the data in Supabase.
    """
    try:
        # Simulate storing the contact request
        print(f"Contact request received from {contact_data.name}")
        return {"success": True, "message": "문의가 성공적으로 전송되었습니다."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))