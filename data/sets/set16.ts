import { Question } from '../../types';

export const set16: Question[] = [
    {
        id: 151,
        question: "Tài khoản nghiệp vụ trên Hệ thống mạng đấu thầu quốc gia là gì?",
        options: {
            A: "Tài khoản do người sử dụng đăng ký và được phê duyệt trên Hệ thống mạng đấu thầu quốc gia",
            B: "Tài khoản do Trung tâm Đấu thầu qua mạng quốc gia cấp phép theo quy định",
            C: "Tài khoản do Tài khoản tham gia hệ thống tạo ra",
            D: "Phương án A và B đều đúng"
        },
        correctAnswer: "A",
        explanation: "Tài khoản nghiệp vụ là tài khoản mà các đơn vị (chủ đầu tư, bên mời thầu, nhà thầu) tự đăng ký thông tin trên Hệ thống mạng đấu thầu quốc gia. Sau khi được đơn vị vận hành hệ thống xác thực và phê duyệt, tài khoản này được sử dụng để thực hiện các nghiệp vụ đấu thầu qua mạng."
    },
    {
        id: 152,
        question: "Nhà thầu có trách nhiệm kê khai thông tin nào trên Hệ thống mạng đấu thầu quốc gia?",
        options: {
            A: "Thông tin về uy tín của nhà thầu trong việc tham dự thầu",
            B: "Thông tin về vi phạm của nhà thầu",
            C: "Thông tin về năng lực, kinh nghiệm của nhà thầu",
            D: "Cả 3 phương án trên đều đúng"
        },
        correctAnswer: "D",
        explanation: "Căn cứ điểm c, khoản 1, Điều 8, \"Nhà thầu có trách nhiệm cập nhật, đăng tải thông tin về năng lực, kinh nghiệm của mình vào cơ sở dữ liệu nhà thầu...\". Thông tin này bao gồm cả lịch sử tham dự thầu (uy tín) và các vi phạm (nếu có) để tạo thành một hồ sơ năng lực đầy đủ, minh bạch, phục vụ cho quá trình đánh giá thầu."
    },
    {
        id: 153,
        question: "Ai chịu trách nhiệm đăng tải thông tin chủ yếu của hợp đồng trên Hệ thống mạng đấu thầu quốc gia?",
        options: {
            A: "Bên mời thầu",
            B: "Tổ chuyên gia",
            C: "Tư vấn đấu thầu",
            D: "Chủ đầu tư"
        },
        correctAnswer: "D",
        explanation: "Căn cứ điểm a, khoản 1, Điều 8, \"Chủ đầu tư có trách nhiệm đăng tải thông tin quy định tại các điểm a, g, h, i và k khoản 1 Điều 7 của Luật này\". Thông tin chủ yếu của hợp đồng được quy định tại điểm h, khoản 1, Điều 7. Do đó, trách nhiệm này thuộc về chủ đầu tư."
    },
    {
        id: 154,
        question: "Trong đấu thầu qua mạng, nhà thầu tư vấn đấu thầu bị khoá tài khoản trong vòng 06 tháng khi thực hiện hành vi nào sau đây?",
        options: {
            A: "Tham gia vào quá trình lập và đánh giá E-HSMT",
            B: "Tham gia vào quá trình thẩm định hồ sơ mời thầu và kết quả lựa chọn nhà thầu",
            C: "Thay chủ đầu tư đăng tải các nội dung thuộc trách nhiệm đăng tải của chủ đầu tư",
            D: "Đăng tải thông tin về năng lực, kinh nghiệm của mình trên Hệ thống mạng đấu thầu quốc gia"
        },
        correctAnswer: "A",
        explanation: "Theo nguyên tắc bảo đảm cạnh tranh và minh bạch, đơn vị tư vấn được thuê để lập hồ sơ mời thầu thì không được tham gia đánh giá hồ sơ dự thầu cho chính gói thầu đó (và ngược lại). Căn cứ khoản 6, Điều 16 (Không bảo đảm công bằng, minh bạch), đây là hành vi bị cấm. Việc thực hiện hành vi này trên môi trường mạng là một vi phạm nghiêm trọng và sẽ bị xử phạt bằng hình thức khóa tài khoản."
    },
    {
        id: 155,
        question: "Chủ đầu tư có trách nhiệm đăng tải thông tin chủ yếu của hợp đồng trên Hệ thống đấu thầu qua mạng quốc gia chậm nhất là?",
        options: {
            A: "05 ngày làm việc kể từ ngày ký kết hợp đồng",
            B: "05 ngày làm việc kể từ ngày hợp đồng có hiệu lực",
            C: "05 ngày kể từ ngày hợp đồng có hiệu lực",
            D: "05 ngày làm việc kể từ ngày nhà thầu nộp bảo đảm thực hiện hợp đồng"
        },
        correctAnswer: "B",
        explanation: "Căn cứ khoản 4, Điều 8, \"Thông tin quy định tại các điểm a, d, g, h, i khoản 1... phải được đăng tải trên Hệ thống mạng đấu thầu quốc gia chậm nhất là 05 ngày làm việc kể từ ngày văn bản được ban hành hoặc hợp đồng có hiệu lực.\""
    },
    {
        id: 156,
        question: "Danh sách nhà thầu có hành vi vi phạm và bị đánh giá về uy tín được đăng tải trên Hệ thống mạng đấu thầu quốc gia như thế nào?",
        options: {
            A: "Tổ chuyên gia đăng tải trong thời hạn 03 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
            B: "Bên mời thầu đăng tải trong thời hạn 05 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
            C: "Chủ đầu tư đăng tải trong thời hạn 07 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm",
            D: "Người có thẩm quyền đăng tải trong thời hạn 05 ngày làm việc kể từ ngày nhà thầu có hành vi vi phạm"
        },
        correctAnswer: "C",
        explanation: "Căn cứ điểm i, khoản 1, Điều 7 và điểm a, khoản 1, Điều 8, thông tin về xử lý vi phạm pháp luật về đấu thầu là thông tin phải được đăng tải và trách nhiệm đăng tải thuộc về chủ đầu tư. Văn bản Luật hợp nhất không quy định thời hạn cụ thể cho việc đăng tải thông tin này. Tuy nhiên, theo thông lệ và các văn bản hướng dẫn, để đảm bảo tính kịp thời, việc đăng tải phải được thực hiện trong một khoảng thời gian ngắn sau khi có quyết định xử lý. 07 ngày làm việc là một khoảng thời gian hợp lý."
    },
    {
        id: 157,
        question: "Chủ thể nào sau đây được gia hạn thời điểm đóng thầu trên Hệ thống mạng đấu thầu quốc gia?",
        options: {
            A: "Người có thẩm quyền",
            B: "Chủ đầu tư",
            C: "Tổ chuyên gia",
            D: "Tư vấn đấu thầu"
        },
        correctAnswer: "B",
        explanation: "Chủ đầu tư (hoặc bên mời thầu được chủ đầu tư giao nhiệm vụ) là đơn vị chịu trách nhiệm chính trong việc tổ chức lựa chọn nhà thầu. Họ là người ra quyết định các vấn đề liên quan đến hồ sơ mời thầu và quá trình mời thầu, bao gồm cả việc sửa đổi hồ sơ mời thầu và gia hạn thời điểm đóng thầu khi cần thiết (ví dụ, để nhà thầu có đủ thời gian chuẩn bị hồ sơ sau khi sửa đổi)."
    },
    {
        id: 158,
        question: "Chọn phương án đúng về thời gian áp dụng mua sắm trực tuyến đối với các hạng mục trong danh mục hàng hóa, dịch vụ mua sắm tập trung?",
        options: {
            A: "Thời gian áp dụng là thời gian thực hiện hợp đồng trong trường hợp không ký thỏa thuận khung nhưng không quá 24 tháng kể từ ngày hợp đồng có hiệu lực",
            B: "Thời gian áp dụng là 24 tháng kể từ ngày kết quả lựa chọn nhà thầu được đăng tải trên Hệ thống mạng đấu thầu quốc gia trong trường hợp hợp đồng, thỏa thuận khung chưa được công khai",
            C: "Thời gian áp dụng là 24 tháng kể từ ngày kết quả lựa chọn nhà thầu được đăng tải trên Hệ thống mạng đấu thầu quốc gia",
            D: "Phương án A và B đều đúng"
        },
        correctAnswer: "A",
        explanation: "Mua sắm trực tuyến trên cơ sở kết quả mua sắm tập trung (MSTT) thực chất là việc các đơn vị có nhu cầu thực hiện hợp đồng với nhà thầu đã trúng thầu MSTT. Thời gian để thực hiện việc mua sắm này sẽ bị giới hạn bởi thời gian hiệu lực của kết quả MSTT. Đối với MSTT qua thỏa thuận khung, thời gian này chính là thời gian có hiệu lực của thỏa thuận khung. Đối với MSTT ký hợp đồng trực tiếp, thời gian áp dụng để các đơn vị mua hàng cũng được giới hạn trong một khoảng thời gian nhất định (thường là 24 tháng) để đảm bảo giá cả còn phù hợp với thị trường."
    },
    {
        id: 159,
        question: "Công việc nào sau đây phải thực hiện trên Hệ thống mạng đấu thầu quốc gia?",
        options: {
            A: "Lập E-HSMT",
            B: "Trình phê duyệt E-HSMT, phê duyệt E-HSMT",
            C: "Phê duyệt kết quả lựa chọn nhà thầu",
            D: "Tất cả các phương án trên đều đúng"
        },
        correctAnswer: "D",
        explanation: "Căn cứ khoản 2, Điều 50, các nội dung lựa chọn nhà thầu được thực hiện trên Hệ thống mạng đấu thầu quốc gia bao gồm: Lập, thẩm định, phê duyệt hồ sơ; Lập, nộp hồ sơ; Mở thầu; Đánh giá hồ sơ, mời thương thảo, thẩm định, phê duyệt kết quả... Do đó, việc Lập E-HSMT, Trình và phê duyệt E-HSMT, và Phê duyệt kết quả lựa chọn nhà thầu đều là các bước bắt buộc phải thực hiện trên hệ thống."
    },
    {
        id: 160,
        question: "Trong đấu thầu qua mạng, việc trả lời yêu cầu làm rõ E-HSMT được thực hiện theo phương án nào?",
        options: {
            A: "Do tổ chuyên gia thực hiện bằng văn bản",
            B: "Do tổ chuyên gia thực hiện trên Hệ thống mạng đấu thầu quốc gia",
            C: "Do tư vấn đấu thầu thực hiện bằng tài khoản của đơn vị tư vấn",
            D: "Do Chủ đầu tư thực hiện trên Hệ thống mạng đấu thầu quốc gia"
        },
        correctAnswer: "D",
        explanation: "Căn cứ điểm g, khoản 2, Điều 50, việc \"Làm rõ các nội dung trong đấu thầu\" là một trong các hoạt động được thực hiện trên Hệ thống. Toàn bộ quá trình trao đổi thông tin, bao gồm việc nhà thầu yêu cầu làm rõ và chủ đầu tư/bên mời thầu trả lời, phải được thực hiện công khai trên hệ thống để tất cả các nhà thầu quan tâm đều nhận được thông tin như nhau, đảm bảo tính minh bạch. Trách nhiệm trả lời thuộc về chủ đầu tư/bên mời thầu."
    }
];
