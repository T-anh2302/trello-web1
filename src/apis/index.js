import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

/**
 * Lưu ý: Đối với việc sử dụng axios ở khóa MERN Stack Pro trên kênh Youtube: TrungQuanDev - Một lập trình viên
 * Tất cả các function bên dưới các bạn sẽ thấy mình chỉ request và lấy data từ response luôn, mà không có try catch hay then catch gì để bắt lỗi.
 * Lý do là vì ở phía Front-end chúng ta không cần thiết làm như vậy đối với mọi request bởi nó sẽ gây ra việc dư thừa code catch lỗi quá nhiều.
 * Giải pháp Clean Code gọn gàng đó là chúng ta sẽ catch lỗi tập trung tại một nơi bằng cách tận dụng một thứ cực kỳ mạnh mẽ trong axios đó là Interceptors
 * Hiểu đơn giản Interceptors là cách mà chúng ta sẽ đánh chặn vào giữa request hoặc respone để xử lý logic mà chúng ta muốn.
 * (Và ở học phần MERN Stack Advance nâng cao học trực tiếp mình sẽ dạy cực kỳ đầy đủ cách xử lý, áp dụng phần này chuẩn chỉnh cho các bạn.)
 */
export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
  // Lưu ý: axios sẽ trả kết quả về qua property của nó là data
  return response.data
}
