from . import models
from sqlalchemy.orm import Session
from . import schemas

def get_stack(db: Session, stack_id: int):
    return db.query(models.Stack).filter(models.Stack.id == stack_id).first()


def get_stack_by_title(db: Session, title: str):
    return db.query(models.Stack).filter(models.Stack.title == title).first()


def get_stacks(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Stack).offset(skip).limit(limit).all()

def create_stack(db: Session, stack: schemas.StackCreate):
    db_stack = models.Stack(title = stack.title)
    db.add(db_stack)
    db.commit()
    db.refresh(db_stack)
    return db_stack


def get_cards(db: Session, skip: int = 0, limit: int = 25):
    return db.query(models.Card).offset(skip).limit(limit).all()


def create_card(db: Session, card: schemas.CardCreate, stack_id: int):
    db_card = models.Card(**card.dict(), stack_id = stack_id)
    db.add(db_card)
    db.commit()
    db.refresh(db_card)
    return db_card