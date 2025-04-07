"""
Portfolio API router - provides portfolio items.
"""
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter()

class PortfolioItem(BaseModel):
    id: int
    title: str
    description: str
    category: str
    details: str
    imageUrl: Optional[str] = None
    date: str

# Sample portfolio data (would be fetched from Supabase in production)
SAMPLE_PORTFOLIO = [
    {
        "id": 1,
        "title": "그래픽카드 고장 수리",
        "description": "오버클럭으로 인한 그래픽카드 손상 복구 및 팬 교체 작업",
        "category": "하드웨어 수리",
        "details": "고객님께서 게임 중 갑자기 화면이 깨지고 PC가 재부팅되는 현상으로 방문하셨습니다.\n\n진단 결과, 그래픽카드의 오버클럭 설정으로 인한 VRM 회로 손상과 쿨링 팬 고장이 확인되었습니다. 손상된 부품을 교체하고 정상 클럭으로 재설정 후 충분한 스트레스 테스트를 진행했습니다.\n\n수리 후에는 최적의 온도와 성능을 위한 쿨링 솔루션도 제안해 드렸습니다.",
        "imageUrl": "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "date": "2023.06.15"
    },
    {
        "id": 2,
        "title": "랜섬웨어 제거 및 데이터 복구",
        "description": "악성 랜섬웨어 제거 및 중요 파일 복구 작업",
        "category": "소프트웨어 문제",
        "details": "소규모 회사에서 갑자기 모든 파일이 암호화되고 몸값을 요구하는 화면이 나타나는 랜섬웨어 감염 사례입니다.\n\n즉시 네트워크에서 분리하고 악성코드 분석을 진행했습니다. 최신 복구 도구를 활용해 랜섬웨어를 제거하고, 백업되지 않은 중요 파일들을 가능한 범위 내에서 복구했습니다.\n\n이후 보안 시스템 강화와 정기적인 백업 솔루션을 구축하여 추가 피해를 방지했습니다.",
        "imageUrl": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "date": "2023.05.23"
    },
    {
        "id": 3,
        "title": "사무실 PC 10대 정기 점검",
        "description": "중소기업 사무실 컴퓨터 정기 유지보수 및 성능 최적화",
        "category": "기업 서비스",
        "details": "10인 규모의 디자인 회사와 정기 유지보수 계약을 체결하여 매월 정기 점검을 진행한 사례입니다.\n\n모든 워크스테이션의 하드웨어 상태를 확인하고, 디스크 조각 모음, 임시 파일 정리, 드라이버 업데이트 등의 최적화 작업을 수행했습니다.\n\n특히 그래픽 작업이 많은 환경에 맞춰 메모리 및 그래픽카드 상태를 집중적으로 관리하여 작업 효율을 크게 향상시켰습니다.",
        "imageUrl": "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "date": "2023.07.05"
    }
]

@router.get("/portfolio")
async def get_portfolio_items(category: Optional[str] = None):
    """
    Get portfolio items, optionally filtered by category.
    """
    try:
        # In a real implementation, this would query Supabase
        items = SAMPLE_PORTFOLIO
        
        if category and category != "all":
            items = [item for item in items if item["category"] == category]
            
        return items
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/portfolio/{item_id}")
async def get_portfolio_item(item_id: int):
    """
    Get a specific portfolio item by ID.
    """
    try:
        # In a real implementation, this would query Supabase
        item = next((item for item in SAMPLE_PORTFOLIO if item["id"] == item_id), None)
        
        if not item:
            raise HTTPException(status_code=404, detail="Portfolio item not found")
            
        return item
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))