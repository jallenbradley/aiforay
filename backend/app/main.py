from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
import os

app = FastAPI(title="aiforay API", description="API for aiforay", version="0.0.1")

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

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
    try:
        response = client.chat.completions.create(
            model="gpt-4",  # or "gpt-4-turbo-preview" for the latest model
            messages=[
                {"role": "user", "content": chat_message.message}
            ],
            temperature=0.7,
            max_tokens=150
        )
        
        # Extract the assistant's response
        ai_response = response.choices[0].message.content
        return {"response": ai_response}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

