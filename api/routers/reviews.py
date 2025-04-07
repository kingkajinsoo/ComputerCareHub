"""
Reviews API router - provides customer reviews.
"""
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel
from typing import List, Optional, Dict
import datetime

router = APIRouter()

class Review(BaseModel):
    id: int
    name: str
    date: str
    rating: int
    comment: str
    service: str

class ReviewSubmission(BaseModel):
    name: str
    rating: int
    comment: str
    service: str

# Sample reviews data (would be fetched from Supabase in production)
# Added with additional reviews from the frontend fallback data
SAMPLE_REVIEWS = [
    {
        "id": 1,
        "name": "김민준",
        "date": "2023.05.12",
        "rating": 5,
        "comment": "갑자기 컴퓨터가 켜지지 않아 당황했는데, 전화 후 1시간 만에 방문해주셔서 신속하게 해결해주셨어요. 친절한 설명과 함께 문제 원인을 자세히 알려주셔서 좋았습니다.",
        "service": "긴급 출장 수리"
    },
    {
        "id": 2,
        "name": "이서연",
        "date": "2023.04.27",
        "rating": 5,
        "comment": "노트북 화면이 깨져서 방문했는데, 예상보다 저렴한 가격에 빠르게 수리해주셨어요. 다른 곳에서는 교체만 가능하다고 했는데 여기서는 수리로 해결해주셔서 비용도 절약했습니다.",
        "service": "노트북 화면 수리"
    },
    {
        "id": 3,
        "name": "박지훈",
        "date": "2023.06.02",
        "rating": 4,
        "comment": "갑자기 블루스크린이 자주 떠서 문의드렸는데, 빠르게 원인을 찾아주시고 해결해주셨어요. 추가로 컴퓨터 성능 최적화까지 해주셔서 전보다 훨씬 빨라졌습니다.",
        "service": "소프트웨어 문제 해결"
    },
    {
        "id": 4,
        "name": "최수아",
        "date": "2023.03.15",
        "rating": 5,
        "comment": "하드디스크가 고장나서 중요한 자료가 날아갈 뻔했는데, 데이터 복구 서비스로 거의 모든 파일을 살려주셨어요. 정말 감사합니다. 앞으로도 컴퓨터 문제가 생기면 무조건 여기로 올 것 같아요.",
        "service": "데이터 복구"
    },
    {
        "id": 5,
        "name": "정도윤",
        "date": "2023.06.20",
        "rating": 4,
        "comment": "게이밍 PC 조립을 의뢰했는데, 제 예산에 맞춰 최적의 부품을 추천해주시고 깔끔하게 조립해주셨어요. 케이블 정리도 정말 깔끔하고, 사용법도 자세히 알려주셔서 만족스럽습니다.",
        "service": "PC 조립"
    },
    {
        "id": 6,
        "name": "한미래",
        "date": "2023.05.05",
        "rating": 5,
        "comment": "사무실 네트워크 문제로 업무가 마비될 뻔했는데, 긴급 출장으로 신속하게 해결해주셨어요. 문제의 원인도 찾아서 앞으로 같은 문제가 발생하지 않도록 조치해주셨습니다. 매우 전문적이고 친절한 서비스에 감사드립니다.",
        "service": "네트워크 문제 해결"
    },
    {
        "id": 7,
        "name": "송현우",
        "date": "2023.07.08",
        "rating": 3,
        "comment": "컴퓨터 업그레이드를 했는데, 처음 예상보다 비용이 조금 더 들었어요. 하지만 작업 퀄리티는 좋았고 설명도 자세히 해주셔서 크게 불만은 없습니다. 다음에는 미리 더 상세한 견적을 받아보고 진행할 것 같아요.",
        "service": "PC 업그레이드"
    },
    {
        "id": 8,
        "name": "임지민",
        "date": "2023.04.10",
        "rating": 5,
        "comment": "노트북이 너무 뜨겁고 소리가 심해서 방문했는데, 내부 청소와 쿨링 패드 교체로 문제를 완벽하게 해결해주셨어요. 먼지가 엄청 쌓여있었는데 이제 소리도 안 나고 훨씬 시원해졌습니다. 친절한 서비스 감사합니다!",
        "service": "노트북 점검 및 청소"
    },
    {
        "id": 9,
        "name": "오준서",
        "date": "2023.06.30",
        "rating": 5,
        "comment": "회사 행사용으로 노트북 10대를 대여했는데, 모든 장비가 완벽하게 세팅되어 있어서 따로 설정할 필요가 없었어요. 행사 중간에 기술적인 문제가 있었는데 즉시 지원도 와주셔서 행사를 성공적으로 마칠 수 있었습니다. 다음 행사에도 이용할 예정입니다.",
        "service": "컴퓨터 렌탈"
    }
]

@router.get("/reviews")
async def get_reviews(page: int = 1, per_page: int = 9):
    """
    Get paginated reviews.
    """
    try:
        # In a real implementation, this would query Supabase
        start_idx = (page - 1) * per_page
        end_idx = start_idx + per_page
        
        reviews = SAMPLE_REVIEWS[start_idx:end_idx]
        total = len(SAMPLE_REVIEWS)
        
        return {
            "reviews": reviews,
            "total": total,
            "page": page,
            "per_page": per_page,
            "pages": (total + per_page - 1) // per_page
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/reviews")
async def submit_review(review_data: ReviewSubmission):
    """
    Submit a new review.
    In a real implementation, this would store the data in Supabase.
    """
    try:
        # Generate a new review ID (would be handled by Supabase in production)
        new_id = len(SAMPLE_REVIEWS) + 1
        
        # Format current date as "YYYY.MM.DD"
        today = datetime.datetime.now()
        formatted_date = today.strftime("%Y.%m.%d")
        
        # Create new review object
        new_review = {
            "id": new_id,
            "name": review_data.name,
            "date": formatted_date,
            "rating": review_data.rating,
            "comment": review_data.comment,
            "service": review_data.service
        }
        
        # Add to the sample reviews (would insert into Supabase in production)
        SAMPLE_REVIEWS.insert(0, new_review)
        
        return {
            "success": True, 
            "message": "리뷰가 성공적으로 등록되었습니다.",
            "review": new_review
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))