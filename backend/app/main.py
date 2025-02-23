from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="aiforay API", description="API for aiforay", version="0.0.1")

#Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatMessage(BaseModel): 
    message: str

@app.post("/chat")
async def chat(chat_message: ChatMessage):
    return {"response": f"AI: you said '{chat_message.message}'"}
    # we will put the code to chat with the model here

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

