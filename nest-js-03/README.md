# 🛠️ NestJS Prisma MySQL Starter Project

Đây là một dự án backend sử dụng **NestJS**, **Prisma**, và **MySQL** với các chức năng sau:
- ✅ Đăng ký, đăng nhập (JWT)
- 🔐 Phân quyền `User` / `Admin`
- 📝 CRUD bài viết
- 👤 Cập nhật thông tin cá nhân

## 📋 Mục Lục
- [Công Nghệ Sử Dụng](#-công-nghệ-sử-dụng)
- [Yêu Cầu Hệ Thống](#-yêu-cầu-hệ-thống)
- [Cấu Trúc Thư Mục](#-cấu-trúc-thư-mục)
- [Cài Đặt](#-cài-đặt)
- [API Endpoint](#-api-endpoint)
- [Test với Postman](#-test-với-postman)
- [Tính Năng Nổi Bật](#-tính-năng-nổi-bật)
- [Tài Liệu Tham Khảo](#-tài-liệu-tham-khảo)
- [Dev Bởi](#-dev-bởi)
- [Giấy Phép](#-giấy-phép)

## 🚀 Công Nghệ Sử Dụng
- [NestJS](https://nestjs.com/) - Framework Node.js hiện đại.
- [Prisma ORM](https://www.prisma.io/) - Công cụ ORM mạnh mẽ cho Node.js.
- [MySQL](https://www.mysql.com/) - Cơ sở dữ liệu quan hệ.
- [Passport JWT](https://docs.nestjs.com/security/authentication) - Xác thực JWT.

## 🖥️ Yêu Cầu Hệ Thống
- Node.js (phiên bản 16 hoặc cao hơn)
- MySQL server (đã cài đặt và chạy)
- npm (Node Package Manager)
- phpMyAdmin (tùy chọn, để quản lý cơ sở dữ liệu)

## 📁 Cấu Trúc Thư Mục
```
src/
├── auth/                # Module xác thực & phân quyền
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── jwt.strategy.ts
│   ├── roles.decorator.ts
│   └── roles.guard.ts
├── users/               # Quản lý người dùng
│   ├── users.controller.ts
│   ├── users.service.ts
├── posts/               # Quản lý bài viết
│   ├── posts.controller.ts
│   ├── posts.service.ts
├── app.module.ts        # Module gốc
└── main.ts              # Điểm khởi chạy
```

## ⚙️ Cài Đặt

### 1. Clone Dự Án
```bash
git clone https://github.com/your-name/project-name.git
cd project-name
```

### 2. Cài Đặt Thư Viện
```bash
npm install
```

### 3. Tạo File `.env`
Tạo file `.env` trong thư mục gốc với nội dung sau:
```plaintext
DATABASE_URL="mysql://root:password@localhost:3306/nestjs-restfull"
JWT_SECRET="your_jwt_secret"
```
📌 Đảm bảo bạn đã tạo sẵn cơ sở dữ liệu `nestjs-restfull` trong phpMyAdmin và thay `password` bằng mật khẩu MySQL của bạn.

### 4. Khởi Tạo Prisma
#### 1. Cấu Trúc `schema.prisma`
```prisma
model User {
  id       Int     @id @default(autoincrement())
  email    String  @unique
  name     String
  password String
  role     Role    @default(USER)
  posts    Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
}

enum Role {
  USER
  ADMIN
}
```

#### 2. Chạy Migrate và Generate Prisma Client
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Chạy Ứng Dụng
```bash
npm run start:dev
```

## 📮 API Endpoint

### Auth
| Method | Endpoint       | Chức năng       |
|--------|----------------|-----------------|
| POST   | /auth/register | Đăng ký         |
| POST   | /auth/login    | Đăng nhập       |

### Users
| Method | Endpoint         | Chức năng             |
|--------|------------------|-----------------------|
| GET    | /users/me        | Lấy thông tin cá nhân |
| PUT    | /users/me        | Cập nhật tên          |
| GET    | /users/admin-only| Truy cập chỉ Admin    |

### Posts
| Method | Endpoint       | Chức năng             |
|--------|----------------|-----------------------|
| GET    | /posts          | Danh sách bài viết    |
| GET    | /posts/:id      | Chi tiết bài viết     |
| POST   | /posts          | Tạo bài viết          |
| PUT    | /posts/:id      | Sửa bài viết          |
| DELETE | /posts/:id      | Xóa bài viết          |

📌 Các API yêu cầu xác thực cần header: `Authorization: Bearer <token>`.

## 🧪 Test với Postman
1. Đăng ký và đăng nhập để lấy `access_token`.
2. Thêm header:
   ```
   Authorization: Bearer <access_token>
   ```
3. Gọi các API `/users`, `/posts` để kiểm tra.

## ✅ Tính Năng Nổi Bật
- 🔐 Bảo mật JWT
- 🧩 Phân quyền qua `@Roles()` và `RolesGuard`
- 🛡️ Prisma chống SQL Injection
- 💡 Tối ưu tổ chức code theo module

## 📚 Tài Liệu Tham Khảo
- [Tài liệu NestJS](https://docs.nestjs.com/)
- [Tài liệu Prisma](https://www.prisma.io/docs/)
- [JWT Auth in NestJS](https://docs.nestjs.com/security/authentication)

## 💻 Dev Bởi
Nguyen Dung – Vietnam Student Marathon

## 📜 Giấy Phép
Dự án này được cấp phép theo Giấy phép MIT. Xem chi tiết trong file [LICENSE](LICENSE).