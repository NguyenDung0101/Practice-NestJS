# 🐾 API Quản Lý Thú Cưng (NestJS + MongoDB)

Một API RESTful CRUD đơn giản được xây dựng bằng [NestJS](https://nestjs.com) và MongoDB sử dụng Mongoose ODM.

---

## 🚀 Tính năng

- Tạo, Đọc, Cập nhật, Xóa (CRUD) thông tin thú cưng
- Kết nối với MongoDB Atlas (hoặc MongoDB cục bộ)
- Kiến trúc mô-đun rõ ràng với NestJS
- Cấu hình dựa trên biến môi trường sử dụng `.env`

---

## 📁 Cấu trúc dự án

```
src/
├── pets/
│   ├── pets.controller.ts
│   ├── pets.service.ts
│   ├── pets.module.ts
│   └── schemas/
│       └── pet.schema.ts
├── app.module.ts
```

---

## 📦 Cài đặt & Chạy

### 1. Tải mã nguồn

```bash
git clone https://github.com/your-username/pet-manager.git
cd pet-manager
```

### 2. Cài đặt các gói phụ thuộc

```bash
npm install
```

### 3. Thêm biến môi trường

Tạo tệp `.env` từ mẫu:

```bash
cp .env.example .env
```

Chỉnh sửa tệp `.env` và cập nhật URI của MongoDB.

### 4. Khởi động ứng dụng

```bash
npm run start:dev
```

---

## 🧪 Các điểm cuối API

| Phương thức | URL          | Mô tả                     |
|-------------|--------------|---------------------------|
| GET         | /pets        | Lấy danh sách thú cưng    |
| GET         | /pets/:id    | Lấy thông tin thú cưng theo ID |
| POST        | /pets        | Tạo mới một thú cưng      |
| PUT         | /pets/:id    | Cập nhật thông tin thú cưng |
| DELETE      | /pets/:id    | Xóa một thú cưng          |

### JSON mẫu:

```json
{
  "name": "Tom",
  "type": "Cat",
  "age": 3
}
```

---

## 🔐 Biến môi trường

Xem tệp `.env.example` để biết các biến bắt buộc.

---

## 📄 `.env.example`

```env
# Chuỗi kết nối MongoDB
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
```

---

## 📌 Giấy phép

Dự án này là mã nguồn mở và được cấp phép theo Giấy phép MIT.
