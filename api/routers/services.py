"""
Services API router - provides services information.
"""
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter()

class Service(BaseModel):
    id: int
    title: str
    description: str
    price: str
    category: str
    features: List[str]
    icon: str

# Sample services data (would be fetched from Supabase in production)
SAMPLE_SERVICES = [
    {
        "id": 1,
        "title": "하드웨어 수리",
        "description": "메인보드, 그래픽 카드, 메모리 등 PC 부품의 고장 진단 및 수리 서비스",
        "price": "50,000원~",
        "category": "hardware",
        "features": ["부품별 정밀 진단", "솔루션 제안", "데이터 보존", "오류 해결"],
        "icon": "Hardware"
    },
    {
        "id": 2,
        "title": "운영체제 및 소프트웨어",
        "description": "윈도우 설치, 최적화, 바이러스 제거, 소프트웨어 문제 해결",
        "price": "40,000원~",
        "category": "software",
        "features": ["윈도우 설치", "드라이버 업데이트", "최적화", "백업 및 복구"],
        "icon": "Software"
    },
    {
        "id": 3,
        "title": "데이터 복구",
        "description": "하드 디스크, SSD, USB 등에서의 데이터 복구 및 백업 서비스",
        "price": "70,000원~",
        "category": "data",
        "features": ["긴급 복구", "파일 복원", "안전한 백업", "저장 장치 복구"],
        "icon": "DataRecovery"
    }
]

@router.get("/services")
async def get_services():
    """
    Get all services.
    """
    try:
        # In a real implementation, this would query Supabase
        return SAMPLE_SERVICES
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/services/{service_id}")
async def get_service(service_id: int):
    """
    Get a specific service by ID.
    """
    try:
        # In a real implementation, this would query Supabase
        service = next((service for service in SAMPLE_SERVICES if service["id"] == service_id), None)
        
        if not service:
            raise HTTPException(status_code=404, detail="Service not found")
            
        return service
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))