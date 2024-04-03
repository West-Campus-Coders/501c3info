from sqlalchemy.orm import Session
from sqlalchemy import union_all
import models, schemas
nonprofit = models.NonprofitData
foundation = models.FoundationData
def get_nonprofitdata(db: Session, skip:int=0, limit:int=100):
    return db.query(models.NonprofitData).offset(skip).limit(limit).all()

def get_nonprofit_geo_both(db: Session, city: str=None, state: str=None, skip:int=0, limit: int=100):
    return db.query(models.NonprofitData).filter(models.NonprofitData.CITY == city, models.NonprofitData.STATE == state ).all()

def get_nonprofit_geo_state(db: Session, state: str=None, skip:int=0, limit: int=100):
    return db.query(models.NonprofitData).filter( models.NonprofitData.STATE == state ).all()

def get_foundation_geo_both(db: Session, city: str=None, state: str=None, skip:int=0, limit: int=100):
    return db.query(foundation).filter(foundation.CITY == city, models.NonprofitData.STATE == state ).all()

def get_foundation_geo_state(db: Session,  state: str=None, skip:int=0, limit: int=100):
    return db.query(foundation).filter(models.NonprofitData.STATE == state ).all()

def get_single(db: Session, ein: int, skip:int=0, limit: int=100):
    q1 = db.query(nonprofit).filter(nonprofit.EIN == ein).first() 
    q1_bool = bool(q1)
    q2 = db.query(foundation).filter(foundation.EIN == ein).first()
    if q1_bool == True:
        return q1
    else:
        return q2

def get_both_list_both(db: Session, city: str= None, state: str=None):
    q1 = db.query(nonprofit).filter(nonprofit.STATE == state, nonprofit.CITY == city).all()
    q2 = db.query(foundation).filter(foundation.STATE == state, foundation.CITY == city).all()
    results_list = [q1, q2]
    return results_list

def get_nonprofit_financial_state_only(db: Session, tass: int ,state: str=None, operator: str=None):
    if operator == "gr":
        return db.query(nonprofit).filter(nonprofit.STATE == state, nonprofit.TASSET > tass).all()
    if operator == "ls":
        return db.query(nonprofit).filter(nonprofit.STATE == state, nonprofit.TASSET < tass).all()
    if operator == "grel":
        return db.query(nonprofit).filter(nonprofit.STATE == state, nonprofit.TASSET >= tass).all()
    else:
        return db.query(nonprofit).filter(nonprofit.STATE == state, nonprofit.TASSET <= tass).all()
    

def get_nonprofit_financial_geo_both(db: Session, tass: int ,state: str=None, city: str=None, operator: str=None):
    if operator == "gr":
        return db.query(nonprofit).filter(nonprofit.STATE == state, nonprofit.CITY == city, nonprofit.TASSET > tass).all()
    if operator == "ls":
        return db.query(nonprofit).filter(nonprofit.STATE == state,  nonprofit.CITY == city, nonprofit.TASSET < tass).all()
    if operator == "grel":
        return db.query(nonprofit).filter(nonprofit.STATE == state,  nonprofit.CITY == city, nonprofit.TASSET >= tass).all()
    else:
        return db.query(nonprofit).filter(nonprofit.STATE == state,  nonprofit.CITY == city, nonprofit.TASSET <= tass).all()
    

def get_foundation_financial_state_only(db: Session, tass: int ,state: str=None, operator: str=None):
    if operator == "gr":
        return db.query(foundation).filter(foundation.STATE == state, foundation.TASSET > tass).all()
    if operator == "ls":
        return db.query(foundation).filter(foundation.STATE == state, foundation.TASSET < tass).all()
    if operator == "grel":
        return db.query(foundation).filter(foundation.STATE == state, foundation.TASSET >= tass).all()
    else:
        return db.query(foundation).filter(foundation.STATE == state, foundation.TASSET <= tass).all()
    

def get_foundation_financial_geo_both(db: Session, tass: int ,state: str=None, city: str=None, operator: str=None):
    if operator == "gr":
        return db.query(foundation).filter(foundation.STATE == state, foundation.CITY == city, foundation.TASSET > tass).all()
    if operator == "ls":
        return db.query(foundation).filter(foundation.STATE == state,  foundation.CITY == city, foundation.TASSET < tass).all()
    if operator == "grel":
        return db.query(foundation).filter(foundation.STATE == state,  foundation.CITY == city, foundation.TASSET >= tass).all()
    else:
        return db.query(foundation).filter(foundation.STATE == state,  foundation.CITY == city, foundation.TASSET <= tass).all()