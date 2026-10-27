# HÓA LAB THPT — Phòng thí nghiệm Hóa học ảo

Bản 0.17.1 — 27 bài: lớp 10 có 8, lớp 11 có 10, lớp 12 có 9.
Giao diện 2D tiếng Việt, thao tác kéo thả và nút tương đương, diễn biến màu/nhiệt/khí theo mô hình từng bài.

## Chạy trên GitHub Pages

1. Tạo một repository trên GitHub, có thể đặt tên `hoa-lab-thpt`.
2. Nếu dùng GitHub Free, chọn repository Public để sử dụng GitHub Pages. Mã nguồn và website khi đó được công khai.
3. Giải nén gói và tải các tệp bên trong lên nhánh `main` ở ngay thư mục gốc của repository. `index.html` phải nằm ở gốc; không tải nguyên tệp ZIP hoặc lồng thêm thư mục HoaLab_GitHub_Pages.
4. Vào Settings → Pages → Build and deployment.
5. Source: Deploy from a branch. Branch: main. Folder: / (root). Bấm Save.
6. Đợi lần triển khai hoàn tất, mở lại Settings → Pages và bấm đường dẫn website do GitHub hiển thị. Không cần đoán hoặc tự ghép đường dẫn.

Tệp `.nojekyll` là tệp rỗng giúp phục vụ trang tĩnh trực tiếp; nếu trình quản lý tệp ẩn nó, bật hiển thị tệp ẩn để chọn. Tệp HTML không có front matter nên vẫn có thể được phục vụ khi chỉ tải index.html và các tệp hiển thị.

## Sử dụng

Mở Thư viện → bấm khối để xổ danh sách bài ở bên dưới → bấm tên bài cụ thể mới chuyển bài.
Bấm khối không đổi bài đang xem hoặc đặt lại thông số. Giữ đủ 27 bài và âm thanh mặc định bật sau thao tác đầu tiên.
Chọn Xem mẫu, Tạm dừng, Làm lại trên thanh bàn; kéo thả dụng cụ hoặc dùng nút tương đương.

Sổ thực hành lưu trong trình duyệt trên từng thiết bị. Trang không có máy chủ lưu điểm hoặc đồng bộ giữa các máy.
Phaser và các mã mô phỏng được gói trong index.html; không cần cài Node.js hoặc build để đưa gói này lên Pages.
Mô phỏng có giả định và giới hạn: xem Giải thích mô hình và nguồn trong từng bài. Không thay thế hướng dẫn thực hành của giáo viên.

## Cập nhật lần sau

Thay index.html bằng bản mới, commit lên main. GitHub Pages sẽ triển khai lại từ nhánh đã cấu hình.

## Nguồn hướng dẫn GitHub

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Thư viện bên thứ ba

Phaser 3.90.0 — xem PHASER_LICENSE.txt. Giữ thông báo bản quyền của Phaser khi phân phối.
