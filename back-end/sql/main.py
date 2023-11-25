from . import cuda, models, schemas
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from .database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware


models.Base.metadata.create_all(bind=engine)
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Show all Stacks
@app.get("/api/", response_model=list[schemas.Stack])
def read_stacks(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    stacks = cuda.get_stacks(db, skip=skip, limit=limit)
    return stacks


# Create Stack
@app.post("/api/", response_model=schemas.Stack)
def create_stack(stack: schemas.StackCreate, db: Session = Depends(get_db)):
    db_stack = cuda.get_stack_by_title(db, title = stack.title)
    if db_stack:
        raise HTTPException(status_code = 400, detail = "Stack is already there")
    return cuda.create_stack(db=db, stack=stack)


# Show Stack by id
@app.get("/api/stack/", response_model=schemas.Stack)
def read_stack(stack_id: int, db: Session = Depends(get_db)):
    db_stack = cuda.get_stack(db, stack_id=stack_id)
    if db_stack is None:
        raise HTTPException(status_code = 400, detail="Stack is not there")
    return db_stack


# Create Card
@app.post("/api/card/", response_model=schemas.Card)
def create_card(stack_id: int, card: schemas.CardCreate, db: Session = Depends(get_db)):
    return cuda.create_card(db=db, card=card, stack_id=stack_id)


#Show Cards
@app.get("/api/card/", response_model=list[schemas.Card])
def read_cards(skip: int = 0, limit: int = 25, db: Session = Depends(get_db)):
    cards = cuda.get_cards(db, skip=skip, limit=limit)
    return cards