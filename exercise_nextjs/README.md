## Cấu trúc thư mục và file

- **`app/`**: Thư mục chứa các route của ứng dụng. Với việc sử dụng App Router, mỗi thư mục con bên trong sẽ tương ứng với một route trong ứng dụng.
- **`layout.tsx`**: Thành phần này được sử dụng để chia sẻ layout cho tất cả các trang trong ứng dụng.
- **`page.tsx`**: Trang chủ của ứng dụng, được hiển thị khi truy cập vào route `/`.

- **`public/`**: Thư mục chứa các file tĩnh như hình ảnh, font chữ, và các tài nguyên khác. Các file trong thư mục này có thể được truy cập trực tiếp qua đường dẫn `/`.

- **`styles/`**: Chứa các file CSS để định dạng giao diện của ứng dụng.
- **`globals.css`**: File CSS chung cho toàn bộ ứng dụng.
- **`Home.module.css`**: File CSS module dùng để định dạng riêng cho trang chủ (`page.tsx`).

- **`next.config.js`**: File cấu hình cho Next.js. Tại đây bạn có thể tùy chỉnh cách hoạt động của Next.js theo yêu cầu của dự án.

- **`tsconfig.json`**: File cấu hình cho TypeScript. Nó định nghĩa các cài đặt và quy tắc mà TypeScript sẽ sử dụng để kiểm tra mã nguồn.

- **`package.json`**: File này chứa thông tin về dự án như tên, phiên bản, các dependencies (thư viện bên ngoài) và các scripts để chạy hoặc build dự án.

- **`node_modules/`**: Thư mục này chứa tất cả các dependencies (thư viện bên ngoài) mà dự án yêu cầu. Thư mục này được tự động tạo ra sau khi chạy lệnh `npm install`.

- **`.gitignore`**: File này định nghĩa các file hoặc thư mục nào sẽ bị bỏ qua bởi Git, không được theo dõi và commit vào kho lưu trữ.
