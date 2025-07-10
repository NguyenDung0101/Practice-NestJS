# VSM-events-v1-backend

Đây là một API RESTful được xây dựng bằng **NestJS** và **TypeORM**, kết nối với cơ sở dữ liệu **MySQL** được quản lý qua **phpMyAdmin**. Dự án triển khai module `Users` với tích hợp cơ sở dữ liệu thực tế, hỗ trợ các chức năng quản lý người dùng.

## 📋 Mục Lục
- [Công Nghệ Sử Dụng](#-công-nghệ-sử-dụng)
- [Cài Đặt](#-cài-đặt)
- [Cấu Trúc Dự Án](#-cấu-trúc-dự-án)
- [Tính Năng](#-tính-năng)
- [Cấu Hình Cơ Sở Dữ Liệu](#-cấu-hình-cơ-sở-dữ-liệu)
- [Lưu Ý Phát Triển](#-lưu-ý-phát-triển)
- [Giao Diện phpMyAdmin](#-giao-diện-phpmyadmin)
- [Tài Liệu Tham Khảo](#-tài-liệu-tham-khảo)
- [Giấy Phép](#-giấy-phép)

## 🔧 Công Nghệ Sử Dụng
- [NestJS](https://nestjs.com/) - Framework Node.js mạnh mẽ để xây dựng ứng dụng server-side hiệu quả và có khả năng mở rộng.
- [MySQL](https://www.mysql.com/) - Hệ quản trị cơ sở dữ liệu quan hệ.
- [phpMyAdmin](https://www.phpmyadmin.net/) - Công cụ quản lý cơ sở dữ liệu qua giao diện web.
- [TypeORM](https://typeorm.io/) - ORM cho TypeScript và Node.js, hỗ trợ MySQL.
- [dotenv](https://www.npmjs.com/package/dotenv) - Tải biến môi trường từ file `.env`.

## ⚙️ Cài Đặt

### Yêu Cầu Hệ Thống
- Node.js (phiên bản 16 trở lên)
- MySQL server (chạy cục bộ hoặc từ xa)
- phpMyAdmin (tùy chọn, để quản lý cơ sở dữ liệu)
- npm (Node Package Manager)

### 1. Clone Dự Án
```bash
git clone https://github.com/NguyenDung0101/VSM-events-v1.git
cd VSM-events-v1/backend
```

### 2. Cài Đặt Dependencies
```bash
npm install
```

### 3. Cấu Hình Biến Môi Trường
Tạo file `.env` trong thư mục gốc với nội dung sau:
```plaintext
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=your_password  # Để trống nếu không có mật khẩu
DB_NAME=vsm_events
```

Thay `your_password` bằng mật khẩu MySQL của bạn và điều chỉnh `DB_HOST`, `DB_PORT`, hoặc `DB_NAME` nếu cần.

### 4. Khởi Chạy Ứng Dụng
Khởi động ứng dụng ở chế độ phát triển:
```bash
npm run start:dev
```

API sẽ khả dụng tại `http://localhost:3000`.

## 🧠 Cấu Trúc Dự Án
```plaintext
src/
├── app.module.ts          # Module chính, cấu hình kết nối cơ sở dữ liệu
├── main.ts                # Điểm khởi chạy của ứng dụng
└── users/
    ├── dto/
    │   └── create-user.dto.ts  # Đối tượng truyền dữ liệu cho việc tạo người dùng
    ├── entities/
    │   └── user.entity.ts      # Entity người dùng cho TypeORM
    ├── users.controller.ts     # Xử lý các yêu cầu HTTP cho người dùng
    ├── users.service.ts        # Logic nghiệp vụ cho người dùng
    └── users.module.ts         # Định nghĩa module người dùng
```

## 🧩 Tính Năng

### Module Users
- **GET /users**: Lấy danh sách tất cả người dùng.
- **POST /users**: Tạo người dùng mới.
- **GET /users/:id**: Lấy thông tin người dùng theo ID.
- **PUT /users/:id**: Cập nhật thông tin người dùng theo ID.
- **DELETE /users/:id**: Xóa người dùng theo ID.

Tất cả người dùng được lưu trong bảng `users` của cơ sở dữ liệu MySQL (`vsm_events`).

## ✅ Cấu Hình Cơ Sở Dữ Liệu
- **Tự Động Tạo Bảng**: Dự án sử dụng `synchronize: true` trong TypeORM, tự động tạo bảng `users` trong cơ sở dữ liệu khi chạy lần đầu.
- **Schema**: Bảng `users` được định nghĩa trong `users/entities/user.entity.ts`.

Ví dụ `user.entity.ts`:
```typescript
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({ default: true })
  isActive: boolean;
}
```

## 🛠 Lưu Ý Phát Triển
- **Tránh `synchronize: true` trong production**: Cài đặt này tiện lợi cho phát triển nhưng có thể gây mất dữ liệu trong môi trường production. Sử dụng migration của TypeORM thay thế.
- **Thêm Entity Mới**: Thêm các entity bổ sung vào mảng `entities: []` trong `TypeOrmModule.forRoot()` trong `app.module.ts`.
- **Tùy Chọn Prisma**: Nếu muốn nâng cấp, có thể tích hợp Prisma để quản lý cơ sở dữ liệu hiệu quả hơn.
- **Bảo Mật**: Đảm bảo mật khẩu được mã hóa (ví dụ: sử dụng `bcrypt`) trước khi lưu vào cơ sở dữ liệu.

## 📸 Giao Diện phpMyAdmin
Sử dụng phpMyAdmin để quản lý cơ sở dữ liệu MySQL qua giao diện web:
- Truy cập phpMyAdmin tại `http://localhost/phpmyadmin` (hoặc URL được cấu hình).
- Chọn cơ sở dữ liệu `vsm_events` để xem hoặc quản lý bảng `users`.

## 📚 Tài Liệu Tham Khảo
- [Tài liệu NestJS](https://docs.nestjs.com/)
- [Tài liệu TypeORM](https://typeorm.io/)
- [Tài liệu MySQL](https://dev.mysql.com/doc/)
- [Tài liệu phpMyAdmin](https://docs.phpmyadmin.net/)

## 📜 Giấy Phép
Dự án này được cấp phép theo Giấy phép MIT. Xem chi tiết trong file [LICENSE](LICENSE).