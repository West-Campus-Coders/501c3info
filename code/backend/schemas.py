from typing import Optional
from pydantic import BaseModel
from datetime import datetime, date

class NonprofitData(BaseModel):
    EIN: int
    NAME: str
    RETURN_TYPE: str
    CITY: str
    STATE: str
    TREV: int
    TASSET: int

    class Config:
        orm_mode = True

class FoundationData(BaseModel):
    EIN: int
    NAME: str
    RETURN_TYPE: str
    CITY: str
    STATE: str
    TGIVEN: int
    TASSET: int

    class Config:
        orm_mode = True
