# Tổng quan bài tập

Trong phần bài tập ứng dụng của chương này, ta sẽ thực hiện xây dựng một "Popup modal", áp dụng các kiến thức đã nghiên cứu trong chương 5: useState, useEffect, useRef và Custom hook. Hook useContext sẽ không được áp dụng cho bài tập minh họa của chương này mà sẽ được vận dụng vào bài tập minh họa cho Chương 8: Quản lý trạng thái (State Management) với Context API/ Redux.

## 1. Mục tiêu kiến thức và kỹ năng bài tập hướng tới:

* **Quản lý trạng thái UI với useState**: Hiểu cách sử dụng state để điều khiển luồng hiển thị của ứng dụng (ẩn/hiện Modal) và cập nhật giao diện ngay lập tức khi người dùng tương tác.
* **Hiểu cách useEffect quản lý side effects**: Biết cách thiết lập và dọn dẹp các tác vụ phụ (như sự kiện DOM, thay đổi style của `<body>`) theo vòng đời của component.
* **Ứng dụng useRef để tham chiếu trực tiếp đến các phần tử DOM thực tế**.
* **Xây dựng và sử dụng Custom Hook**: Hiểu tư duy tách biệt logic ra khỏi giao diện bằng cách đóng gói chức năng phức tạp/ cần tái sử dụng vào Custom Hook.

## 2. Mô tả về bài tập:

Để hiện thực hóa các mục tiêu trên, bài tập được triển khai với các yêu cầu và chức năng cụ thể như sau:

### 2.1. Xây dựng Custom Hook useLockBodyScroll

Tạo 1 hook riêng biệt để xử lý việc khóa thanh cuộn của trình duyệt:

* **Khi component Modal được mount**: Gán thuộc tính `style.overflow = 'hidden'` cho thẻ `<body>` để ngăn cuộn trang.
* **Khi component Modal được unmount (Cleanup)**: Khôi phục lại trạng thái overflow ban đầu cho thẻ `<body>`.

### 2.2. Tạo Component Modal

* **Component nhận 4 props**:
    * `isOpen` (boolean): Trạng thái đóng/ mở của Modal.
    * `onClose` (function): Hàm callback để đóng Modal.
    * `title` (string) và `children` (node): Nội dung hiển thị bên trong Modal.

* **Logic tương tác (useRef và useEffect)**:
    * Sử dụng `useLockBodyScroll` để tự động khóa cuộn khi Modal hiển thị.
    * Khởi tạo `useRef` và gán vào thẻ `<div>` chứa nội dung chính (modal-content).
    * `useEffect` lắng nghe sự kiện `'mousedown'` trên toàn bộ document.
    * Trong hàm xử lý sự kiện: Kiểm tra xem vị trí con trỏ chuột khi nhấn có nằm ngoài vùng ref của Modal hay không. Nếu người dùng nhấn ra ngoài vùng ref, gọi hàm `onClose()`.

* **Cleanup**: Đảm bảo gỡ lắng nghe sự kiện (`removeEventListener`) khi Modal đóng để tránh rò rỉ bộ nhớ (memory leak).

### 2.3. Component App (Component cha của Modal)

* Quản lý state `showModal` (true/false)
* Sử dụng Conditional Rendering để chỉ hiển thị component Modal khi `showModal` là true.
* Cung cấp nút bấm để kích hoạt Modal, chứa nội dung dài để kiểm chứng chức năng khóa cuộn khi mở Modal.