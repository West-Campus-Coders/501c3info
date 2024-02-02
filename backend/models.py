from sqlalchemy import String, Integer, Column
from database import Base

class NonprofitData(Base):
    __tablename__ = "NONPROFITS"

    EIN = Column(Integer, primary_key=True)
    NAME = Column(String)
    RETURN_TYPE = Column(String)
    CITY = Column(String)
    STATE = Column(String)
    TREV = Column(Integer)
    TASSET = Column(Integer)


class FoundationData(Base):
    __tablename__ = "FOUNDATIONS"

    EIN = Column(Integer, primary_key=True)
    NAME = Column(String)
    RETURN_TYPE = Column(String)
    CITY = Column(String)
    STATE = Column(String)
    TGIVEN = Column(Integer)
    TASSET = Column(Integer)
