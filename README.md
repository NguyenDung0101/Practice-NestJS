# 🐾 Pet Manager API (NestJS + MongoDB)

A simple RESTful CRUD API built with [NestJS](https://nestjs.com) and MongoDB using Mongoose ODM.

---

## 🚀 Features

- Create, Read, Update, Delete (CRUD) pets
- Connects to MongoDB Atlas (or local MongoDB)
- Clean modular architecture with NestJS
- Environment-based configuration using `.env`

---

## 📁 Project Structure

src/
├── pets/
│ ├── pets.controller.ts
│ ├── pets.service.ts
│ ├── pets.module.ts
│ └── schemas/
│ └── pet.schema.ts
├── app.module.ts

yaml
Sao chép
Chỉnh sửa

---

## 📦 Installation & Running

### 1. Clone this repo

```bash
git clone https://github.com/your-username/pet-manager.git
cd pet-manager
2. Install dependencies
bash
Sao chép
Chỉnh sửa
npm install
3. Add environment variables
Create a .env file from the example:

bash
Sao chép
Chỉnh sửa
cp .env.example .env
Edit the .env and update the MongoDB URI.

4. Start the app
bash
Sao chép
Chỉnh sửa
npm run start:dev
🧪 API Endpoints
Method	URL	Description
GET	/pets	Get all pets
GET	/pets/:id	Get a pet by ID
POST	/pets	Create a new pet
PUT	/pets/:id	Update a pet
DELETE	/pets/:id	Delete a pet

Sample JSON:
json
Sao chép
Chỉnh sửa
{
  "name": "Tom",
  "type": "Cat",
  "age": 3
}
🔐 Environment Variables
See .env.example for required variables.

📌 License
This project is open-source and available under the MIT License.

yaml
Sao chép
Chỉnh sửa

---

## 📄 `.env.example`

```env
# MongoDB connection string
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
