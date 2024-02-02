from sqlalchemy.orm import Session
from sqlalchemy import *
import crud, models, schemas
from database import SessionLocal, engine
from fastapi import Depends, FastAPI, HTTPException
from typing import Annotated, Union
models.Base.metadata.create_all(bind=engine)
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origin = "http://localhost:5173/" 

def trev_gt(TREV):
    return f""

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origin,
    allow_methods=["*"],
    allow_headers=["*"]
)


'''def get_nonprofitdata(db: Session, skip:int=0, limit:int=100):
    return db.query(models.NonprofitData).offset(skip).limit(limit).all()'''

@app.get("/nonprofit-all", response_model=list[schemas.NonprofitData])
def read_nonprofitdata(skip: int=0, limit: int=1000, db:Session=Depends(get_db)):
    nonprofit_data = crud.get_nonprofitdata(db, skip=skip, limit=limit)
    return nonprofit_data

'''def get_nonprofit(db: Session, city: str=None, state: str=None, skip:int=0, limit: int=100):
    return db.query(models.NonprofitData).filter_by(models.NonprofitData.CITY == city, models.NonprofitData.STATE == state).all()'''

@app.get("/nonprofit/{state}/{city}", response_model=list[schemas.NonprofitData])
def get_nonprofit(city: str, state: str, db: Session = Depends(get_db)):
    db_nonprofit = crud.get_nonprofit_geo_both(db, city=city, state=state)
    return db_nonprofit

@app.get("/nonprofit/{state}", response_model=list[schemas.NonprofitData])
def get_nonprofit(state: str, db: Session = Depends(get_db)):
    db_nonprofit = crud.get_nonprofit_geo_state(db, state=state)
    return db_nonprofit

@app.get("/foundation/{state}/{city}", response_model=list[schemas.FoundationData])
def get_foundation(city: str, state: str, db: Session = Depends(get_db)):
    db_foundation = crud.get_foundation_geo_both(db, city=city, state=state)
    return db_foundation

@app.get("/foundation/{state}", response_model=list[schemas.FoundationData])
def get_nonprofit(state: str, db: Session = Depends(get_db)):
    db_foundation = crud.get_foundation_geo_state(db, state=state)
    return db_foundation


@app.get("/single/{ein}")
def get_single(ein: str, db: Session =Depends(get_db), skip: int=0):
    single_entry = crud.get_single(db, ein=ein, skip=skip)
    return single_entry

@app.get("/both/{city}/{state}")
def get_both_both(city: str, state:str, db: Session= Depends(get_db)):
    result = crud.get_both_list_both(db, city=city, state=state)
    return result

@app.get("/nonprofit/{state}/{operator}/{tass}")
def get_nonprofit_financial_state_only(tass: int, state: str, operator: str, db: Session= Depends(get_db)):
    result = crud.get_nonprofit_financial_state_only(db, state=state, tass=tass, operator=operator)
    return result

@app.get("/nonprofit/{state}/{city}/{operator}/{tass}")
def get_nonprofit_financial_geo_both(tass: int, state: str, city: str, operator: str, db: Session= Depends(get_db)):
    result = crud.get_nonprofit_financial_geo_both(db, state=state, city=city, tass=tass, operator=operator)
    return result

@app.get("/foundation/{state}/{operator}/{tass}")
def get_foundation_financial_state_only(tass: int, state: str, operator: str, db: Session= Depends(get_db)):
    result = crud.get_nonprofit_financial_state_only(db, state=state, tass=tass, operator=operator)
    return result

@app.get("/foundation/{state}/{city}/{operator}/{tass}")
def get_foundation_financial_geo_both(tass: int, state: str, city: str, operator: str, db: Session= Depends(get_db)):
    result = crud.get_foundation_financial_geo_both(db, state=state, city=city, tass=tass, operator=operator)
    return result