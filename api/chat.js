export default async function handler(req, res) {
    // 1. Cấu hình CORS để trình duyệt của bạn được phép gọi API này
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Xử lý preflight request từ trình duyệt
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Chỉ chấp nhận phương thức POST' });
    }

    try {
        // Lấy câu hỏi từ frontend của bạn
        const { message } = req.body;

        // 2. Đóng giả người dùng truy cập trang chủ để lấy Cookie và CSRF Token
        const initResponse = await fetch('https://hoahocdoimoi.4devvn.com/');
        const html = await initResponse.text();

        // Dùng Regex để cắt lấy CSRF Token từ mã HTML
        const tokenMatch = html.match(/<meta name="csrf-token" content="([^"]+)">/);
        const csrfToken = tokenMatch ? tokenMatch[1] : null;

        // Lấy Session Cookie từ header trả về
        const cookies = initResponse.headers.get('set-cookie');

        if (!csrfToken) {
            return res.status(500).json({ error: 'Không thể trích xuất CSRF Token từ trang đích.' });
        }

        // 3. Đóng gói dữ liệu gửi đi (giống hệt trình duyệt)
        const formData = new FormData();
        formData.append('message', message || 'Chào bạn');

        // 4. Gửi request cuối cùng đến API AI
        const apiResponse = await fetch('https://hoahocdoimoi.4devvn.com/hoahocso/process', {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrfToken,
                'Cookie': cookies // Gửi kèm Cookie để xác thực phiên
            },
            body: formData
        });

        const data = await apiResponse.json();
        
        // Trả kết quả về cho HTML của bạn
        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}