from pydantic import BaseModel

class CardBase(BaseModel):
    title: str
    description: str | None = None


class Card(CardBase):
    id: int
    stack_id: int

    class Config:
        orm_mode = True


class CardCreate(CardBase):
    pass

class StackBase(BaseModel):
    title: str


class StackCreate(StackBase):
    pass


class Stack(StackBase):
    id: int
    title: str
    cards: list[Card] = []

    class Config:
        orm_mode = True