import { Question } from '../../types';

export const set18: Question[] = [
    {
        id: 171,
        question: "Khi đánh giá E-HSDT gói thầu xây lắp đấu thầu rộng rãi qua mạng, trường hợp có sự không thống nhất giữa thông tin về hợp đồng tương tự kê khai trên webform và file tài liệu chứng minh các thông tin về hợp đồng đó thì xử lý như thế nào?",
        options: {
            A: "Đánh giá nhà thầu không đạt yêu cầu về hợp đồng tương tự",
            B: "Yêu cầu nhà thầu làm rõ E-HSDT trên Hệ thống mạng đấu thầu quốc gia",
            C: "Yêu cầu nhà thầu gửi bổ sung hợp đồng tương tự bằng bản giấy để đánh giá",
            D: "Các phương án trên đều sai"
        },
        correctAnswer: "B",
        explanation: "Khi có sự không thống nhất giữa các phần của hồ sơ dự thầu, nguyên tắc đầu tiên là phải yêu cầu nhà thầu làm rõ để xác định thông tin chính xác. Việc loại bỏ nhà thầu ngay lập tức (A) hoặc chỉ dựa vào một nguồn thông tin có thể không khách quan. Quá trình làm rõ phải được thực hiện trên Hệ thống mạng đấu thầu quốc gia để đảm bảo tính minh bạch và lưu lại bằng chứng."
    },
    {
        id: 172,
        question: "Đối với đấu thầu qua mạng, việc làm rõ E-HSDT giữa Chủ đầu tư và nhà thầu có E-HSDT cần phải làm rõ được thực hiện như thế nào?",
        options: {
            A: "Chủ đầu tư được làm rõ đối với các nội dung về tư cách hợp lệ, năng lực, kinh nghiệm, không được làm rõ đối với yêu cầu về kỹ thuật, tài chính",
            B: "Chủ đầu tư được làm rõ đối với yêu cầu về kỹ thuật, tài chính, không được làm rõ đối với các nội dung về tư cách hợp lệ, năng lực, kinh nghiệm",
            C: "Chủ đầu tư dành cho nhà thầu tối đa 03 ngày để nhà thầu thực hiện việc làm rõ E-HSDT",
            D: "Chủ đầu tư dành cho nhà thầu tối thiểu 03 ngày làm việc để nhà thầu thực hiện việc làm rõ E-HSDT"
        },
        correctAnswer: "D",
        explanation: "Việc làm rõ hồ sơ dự thầu là một bước quan trọng. Để đảm bảo nhà thầu có đủ thời gian chuẩn bị các tài liệu, giải trình một cách cẩn thận và đầy đủ, pháp luật quy định một khoảng thời gian tối thiểu. Thời gian \"tối thiểu 03 ngày làm việc\" là một quy định phổ biến trong các văn bản hướng dẫn đấu thầu để đảm bảo quyền lợi cho nhà thầu."
    },
    {
        id: 173,
        question: "File đính kèm nào sau đây của nhà thầu nộp trên Hệ thống mạng đấu thầu quốc gia không được xem xét, đánh giá?",
        options: {
            A: "Các file mở, đọc được bằng các phần mềm thông dụng như: các phần mềm đọc, soạn thảo văn bản MS Office hoặc Open Office; các phần mềm đọc file PDF; các phần mềm thiết kế thông dụng như AutoCad, Photoshop; phần mềm đọc file ảnh tích hợp sẵn trên Hệ điều hành Windows",
            B: "Các file sử dụng phông chữ thuộc bảng mã Unicode",
            C: "Các file nén mở được bằng các phần mềm giải nén thông dụng như phần mềm giải nén ZIP tích hợp sẵn trên hệ điều hành Windows hoặc phần mềm giải nén Rar hoặc 7Zip",
            D: "Các file bị nhiễm virus, bị lỗi, hỏng"
        },
        correctAnswer: "D",
        explanation: "Các file bị nhiễm virus, lỗi hoặc hỏng không thể mở được hoặc gây rủi ro an ninh cho hệ thống. Do đó, về mặt kỹ thuật, các file này không thể được xem xét và sẽ bị loại bỏ. Các phương án A, B, C đều mô tả các định dạng file và phông chữ hợp lệ, được hệ thống chấp nhận."
    },
    {
        id: 174,
        question: "Đối với đấu thầu qua mạng, nội dung nào sau đây do Hệ thống tự động đánh giá?",
        options: {
            A: "Bảo đảm dự thầu",
            B: "Thoả thuận liên danh đối với nhà thầu liên danh",
            C: "Doanh thu bình quân 3 năm gần nhất của nhà thầu",
            D: "Các đáp án trên đều đúng"
        },
        correctAnswer: "D",
        explanation: "Hệ thống mạng đấu thầu quốc gia được thiết kế để tự động hóa các bước kiểm tra mang tính tiêu chuẩn, \"đạt/không đạt\". Các nội dung như hiệu lực của bảo đảm dự thầu (so sánh với yêu cầu), sự tồn tại của thỏa thuận liên danh (đối với nhà thầu liên danh), và các chỉ tiêu tài chính như doanh thu (so sánh số liệu nhà thầu kê khai với yêu cầu của E-HSMT) đều có thể được hệ thống tự động kiểm tra và đưa ra kết quả sơ bộ."
    },
    {
        id: 175,
        question: "Đối với đấu thầu qua mạng, nội dung đánh giá kết quả hoạt động tài chính nào sau đây là đúng?",
        options: {
            A: "Đối với số liệu về kết quả hoạt động tài chính từ 2021 trở đi, Hệ thống đánh giá căn cứ thông tin được trích xuất hoặc thông tin do nhà thầu cập nhật",
            B: "Đối với số liệu về kết quả hoạt động tài chính trước năm 2021, hệ thống đánh giá căn cứ thông tin do nhà thầu kê khai",
            C: "Đối với nhà thầu là hộ kinh doanh, không đánh giá tiêu chí kết quả hoạt động tài chính",
            D: "Tất cả phương án trên đều đúng"
        },
        correctAnswer: "D",
        explanation: "Việc đánh giá tài chính trên hệ thống được thực hiện một cách linh hoạt: (A) Đối với dữ liệu tài chính gần đây (từ 2021 trở đi), hệ thống có thể được kết nối với cơ sở dữ liệu của cơ quan thuế, đăng ký kinh doanh để tự động trích xuất, đối chiếu thông tin, tăng tính chính xác. (B) Đối với dữ liệu cũ hơn, khi việc kết nối chưa được thực hiện, hệ thống sẽ dựa trên thông tin do nhà thầu tự kê khai. (C) Đối với các loại hình đặc thù như hộ kinh doanh không có hệ thống báo cáo tài chính chuẩn, tiêu chí này có thể không được áp dụng đánh giá. Cả ba phương án đều phản ánh đúng cách thức vận hành thực tế của hệ thống."
    },
    {
        id: 176,
        question: "Đối với đấu thầu rộng rãi qua mạng, một số nội dung do Hệ thống mạng đấu thầu quốc gia đánh giá \"không đạt\" thì Tổ chuyên gia không thể sửa đổi kết quả đánh giá từ \"không đạt\" thành \"đạt\". Phương án nào sau đây là đúng?",
        options: {
            A: "Tư cách hợp lệ, nhà thầu không có nhân sự bị tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng, trạng thái bị tạm ngưng, chấm dứt tham gia Hệ thống mạng đấu thầu quốc gia, doanh thu bình quân hằng năm.",
            B: "Tư cách hợp lệ, bảo đảm dự thầu, thực hiện nghĩa vụ kê khai thuế và nộp thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm",
            C: "Tư cách hợp lệ, nhà thầu không có nhân sự bị tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng, trạng thái bị tạm ngừng, chấm dứt tham gia Hệ thống mạng đấu thầu quốc gia, thực hiện nghĩa vụ kê khai thuế và nộp thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm",
            D: "Tư cách hợp lệ, nhà thầu không có nhân sự bị tòa án kết án có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng, lịch sử không hoàn thành hợp đồng do lỗi của nhà thầu, thực hiện nghĩa vụ kê khai thuế và nộp thuế, kết quả hoạt động tài chính, doanh thu bình quân hằng năm"
        },
        correctAnswer: "C",
        explanation: "Hệ thống mạng đấu thầu quốc gia được thiết kế để tự động đánh giá các tiêu chí mang tính \"cứng\", có thể kiểm tra được dựa trên dữ liệu có sẵn (kê khai của nhà thầu, kết nối với cơ sở dữ liệu quốc gia). Các tiêu chí này bao gồm: tư cách hợp lệ (còn hoạt động, không bị cấm thầu), lịch sử vi phạm, tình trạng thuế, các chỉ số tài chính cơ bản. Đây là các tiêu chí đánh giá sơ bộ. Nếu hệ thống đánh giá \"không đạt\", điều đó có nghĩa là nhà thầu không đáp ứng điều kiện tiên quyết, và tổ chuyên gia phải tuân thủ kết quả này, không thể \"sửa\" thành \"đạt\"."
    },
    {
        id: 177,
        question: "Quy trình 02 trong đánh giá E-HSDT được áp dụng đối với gói thầu nào sau đây?",
        options: {
            A: "Gói thầu mua sắm hàng hóa áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp “giá thấp nhất” và các nhà thầu, E-HSDT đều không có bất kỳ ưu đãi nào",
            B: "Gói thầu dịch vụ phi tư vấn áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp “giá đánh giá” và các nhà thầu, E-HSDT chào ưu đãi như nhau",
            C: "Gói thầu xây lắp áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp “giá thấp nhất” và các nhà thầu, E-HSDT đều không có bất kỳ ưu đãi nào",
            D: "Gói thầu máy đặt, máy mượn áp dụng phương thức một giai đoạn một túi hồ sơ, sử dụng phương pháp “giá thấp nhất” và các nhà thầu, E-HSDT chào ưu đãi như nhau"
        },
        correctAnswer: "A",
        explanation: "\"Quy trình 02\" (quy trình rút gọn) được thiết kế cho những gói thầu đơn giản, thông dụng nhất để đẩy nhanh quá trình đánh giá. Điều kiện để áp dụng quy trình này là: gói thầu áp dụng phương thức đơn giản nhất (một giai đoạn một túi hồ sơ), phương pháp đánh giá đơn giản nhất (giá thấp nhất), và không có yếu tố phức tạp như xét ưu đãi (vì ưu đãi đòi hỏi phải tính toán quy đổi về giá). Phương án A hội tụ đầy đủ các yếu tố này."
    },
    {
        id: 178,
        question: "Chủ đầu tư yêu cầu gia hạn hiệu lực hồ sơ dự thầu, bảo đảm dự thầu trong trường hợp nào sau đây?",
        options: {
            A: "Trước khi hết hạn hiệu lực hồ sơ dự thầu trong trường hợp cần gia hạn để tiếp tục đánh giá hồ sơ dự thầu",
            B: "Trường hợp nhà thầu xếp hạng tiếp theo được mời vào thương thảo hợp đồng nhưng hồ sơ dự thầu của nhà thầu đó hết hiệu lực thì Chủ đầu tư phải yêu cầu nhà thầu gia hạn hiệu lực của hồ sơ dự thầu, bảo đảm dự thầu trước khi thương thảo hợp đồng",
            C: "Trước khi phê duyệt kết quả lựa chọn nhà thầu",
            D: "Phương án A và B đều đúng"
        },
        correctAnswer: "D",
        explanation: "Căn cứ khoản 6, Điều 14, việc gia hạn hiệu lực hồ sơ dự thầu được thực hiện \"sau thời điểm đóng thầu\". (A) Trường hợp quá trình đánh giá hồ sơ kéo dài, có nguy cơ hết hiệu lực hồ sơ dự thầu trước khi có kết quả, chủ đầu tư cần yêu cầu gia hạn để tiếp tục đánh giá. (B) Khi mời nhà thầu xếp hạng tiếp theo vào thương thảo, nếu hồ sơ dự thầu của họ sắp hết hiệu lực, chủ đầu tư cũng phải yêu cầu họ gia hạn để đảm bảo tính pháp lý của việc thương thảo và ký kết hợp đồng. Do đó, cả hai trường hợp đều đúng."
    },
    {
        id: 179,
        question: "Trong quá trình đánh giá, Tổ chuyên gia phát hiện nhà thầu tham dự thầu trên Hệ thống mạng đấu thầu quốc gia đính kèm tệp tin có thiết lập mật khẩu thì xử lý thế nào?",
        options: {
            A: "Yêu cầu nhà thầu nộp lại tệp tin không có thiết lập mật khẩu trên Hệ thống mạng đấu thầu quốc gia để xem xét, đánh giá",
            B: "Yêu cầu nhà thầu cung cấp mật khẩu để xem xét, đánh giá",
            C: "Tệp tin này không được xem xét, đánh giá",
            D: "Phương án A và B đều đúng"
        },
        correctAnswer: "C",
        explanation: "Nguyên tắc của đấu thầu là công khai và minh bạch. Việc đặt mật khẩu cho tệp tin trong hồ sơ dự thầu khiến cho bên mời thầu không thể tiếp cận và đánh giá nội dung. Đây được xem là hành vi không hợp tác, không minh bạch từ phía nhà thầu. Do đó, các tệp tin bị khóa sẽ không được xem xét."
    },
    {
        id: 180,
        question: "Theo quy định tại Thông tư số 79/2025/TT-BTC, quy định về thời điểm bắt đầu và kết thúc chào giá trực tuyến theo quy trình rút gọn?",
        options: {
            A: "Thời điểm bắt đầu và kết thúc phải trong giờ hành chính.",
            B: "Thời điểm bắt đầu không bắt buộc trong giờ hành chính nhưng kết thúc phải trong giờ hành chính.",
            C: "Thời điểm bắt đầu và kết thúc không bắt buộc trong giờ hành chính.",
            D: "Tất cả phương án trên đều sai"
        },
        correctAnswer: "A",
        explanation: "Chào giá trực tuyến là một phiên giao dịch diễn ra trong thời gian thực. Để đảm bảo có sự tham gia của các bên (nhà thầu, bên mời thầu) và sự hỗ trợ kỹ thuật khi cần thiết, các phiên chào giá thường được quy định phải diễn ra trong giờ làm việc hành chính."
    }
];