import { Question } from '../../types';

export const set12: Question[] = [
    {
        id: 111,
        question: "Người có thẩm quyền ban hành quyết định cấm tham gia hoạt động đấu thầu với thời gian cấm bao lâu đối với trường hợp tổ chức, cá nhân có từ 02 hành vi vi phạm trở lên thuộc cùng phạm vi quản lý của người có thẩm quyền và các hành vi này chưa bị cấm tham gia hoạt động đấu thầu?",
        options: {
            A: "Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối thiểu trên 05 năm",
            B: "Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối đa không quá 03 năm",
            C: "Bằng tổng thời gian cấm của các hành vi vi phạm nhưng tối đa không quá 05 năm",
            D: "Bằng thời gian cấm của hành vi vi phạm có thời gian bị cấm cao nhất"
        },
        correctAnswer: "C",
        explanation: "Văn bản Luật Đấu thầu hợp nhất không quy định chi tiết cách tổng hợp hình phạt trong trường hợp này. Tuy nhiên, theo nguyên tắc xử phạt vi phạm hành chính, khi một cá nhân/tổ chức thực hiện nhiều hành vi vi phạm thì có thể bị áp dụng hình phạt cho từng hành vi nhưng tổng hợp hình phạt không được vượt quá mức tối đa của khung hình phạt. Mức cấm thầu cao nhất theo khoản 2, Điều 87 là 05 năm. Do đó, phương án C là hợp lý nhất."
    },
    {
        id: 112,
        question: "Hành vi gian lận trong hoạt động đấu thầu sẽ bị cấm tham gia hoạt động đấu thầu trong thời gian bao lâu?",
        options: {
            A: "Từ 06 tháng đến 01 năm",
            B: "02 năm",
            C: "Từ 01 năm đến 02 năm",
            D: "Từ 03 năm đến 05 năm"
        },
        correctAnswer: "D",
        explanation: "Căn cứ khoản 2, Điều 87, thời gian cấm thầu là từ 06 tháng đến 05 năm. Gian lận (quy định tại khoản 4, Điều 16) là một trong những hành vi bị cấm nghiêm trọng nhất. Các văn bản hướng dẫn chi tiết của Chính phủ thường phân loại mức độ vi phạm để áp dụng khung thời gian cấm thầu tương ứng. Đối với hành vi gian lận, mức phạt thường nằm ở khung cao nhất. Do đó, khung từ 03 năm đến 05 năm là phù hợp nhất."
    },
    {
        id: 113,
        question: "Hành vi cản trở trong hoạt động đấu thầu sẽ bị cấm tham gia hoạt động đấu thầu trong thời gian bao lâu?",
        options: {
            A: "06 tháng",
            B: "Từ 06 tháng đến dưới 1 năm",
            C: "Từ 01 năm đến 03 năm",
            D: "Từ 03 năm đến 05 năm"
        },
        correctAnswer: "C",
        explanation: "Tương tự câu 112, hành vi cản trở (quy định tại khoản 5, Điều 16) cũng là một hành vi bị cấm. Tuy nhiên, mức độ nghiêm trọng của nó thường được xem xét thấp hơn so với hành vi gian lận hoặc thông thầu. Do đó, khung thời gian cấm thầu áp dụng sẽ thấp hơn, và khung từ 01 năm đến 03 năm là hợp lý."
    },
    {
        id: 114,
        question: "Thành viên A trong nhà thầu liên danh A-B thực hiện hành vi \"làm giả hoặc làm sai lệch thông tin, hồ sơ, tài liệu trong đấu thầu\" thì việc cấm tham gia hoạt động đấu thầu được xử lý như thế nào?",
        options: {
            A: "Cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm đối với thành viên A",
            B: "Cấm tham gia hoạt động đấu thầu từ 01 năm đến dưới 03 năm đối với thành viên A",
            C: "Cấm tham gia hoạt động đấu thầu từ 03 năm đến 05 năm đối với tất cả thành viên trong nhà thầu liên danh A-B",
            D: "Cấm tham gia hoạt động đấu thầu từ 01 năm đến 03 năm đối với tất cả thành viên trong nhà thầu liên danh A-B"
        },
        correctAnswer: "A",
        explanation: "Hành vi \"làm giả hoặc làm sai lệch thông tin\" là hành vi gian lận theo điểm a, khoản 4, Điều 16. Theo nguyên tắc xử phạt \"cá nhân hóa trách nhiệm\", thành viên nào thực hiện hành vi vi phạm thì thành viên đó sẽ bị xử lý. Do đó, chỉ thành viên A bị cấm thầu. Vì đây là hành vi gian lận nghiêm trọng, mức cấm sẽ ở khung cao nhất là từ 03 năm đến 05 năm."
    },
    {
        id: 115,
        question: "Đình chỉ cuộc thầu được thực hiện trong thời gian nào?",
        options: {
            A: "Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu đến trước khi ký kết hợp đồng, thỏa thuận khung tập trung",
            B: "Trong quá trình tổ chức lựa chọn nhà thầu cho đến trước khi phê duyệt kết quả lựa chọn nhà thầu",
            C: "Sau khi phê duyệt kết quả lựa chọn nhà thầu đến khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
            D: "Trong quá trình thực hiện hợp đồng"
        },
        correctAnswer: "B",
        explanation: "Căn cứ điểm a, khoản 1, Điều 18, \"Đình chỉ cuộc thầu được thực hiện trong quá trình tổ chức lựa chọn nhà thầu, nhà đầu tư cho đến trước khi phê duyệt kết quả lựa chọn nhà thầu, nhà đầu tư\". Đây là quy định trực tiếp về thời điểm áp dụng biện pháp đình chỉ cuộc thầu."
    },
    {
        id: 116,
        question: "Biện pháp nào sau đây được thực hiện trong quá trình thực hiện hợp đồng?",
        options: {
            A: "Hủy thầu",
            B: "Đình chỉ cuộc thầu",
            C: "Không công nhận kết quả lựa chọn nhà thầu",
            D: "Phương án A và B đều đúng"
        },
        correctAnswer: "C",
        explanation: "Căn cứ điểm b, khoản 1, Điều 18, biện pháp \"Không công nhận kết quả lựa chọn nhà thầu, nhà đầu tư\" được áp dụng \"trong quá trình tổ chức lựa chọn nhà thầu, nhà đầu tư và quá trình thực hiện hợp đồng\". Hủy thầu và đình chỉ cuộc thầu chỉ được thực hiện trước khi ký kết hợp đồng. Do đó, đây là biện pháp có thể áp dụng trong quá trình thực hiện hợp đồng."
    },
    {
        id: 117,
        question: "Đối với việc giải quyết kiến nghị về các vấn đề trước khi có thông báo kết quả lựa chọn nhà thầu, cá nhân, đơn vị nào sau đây có trách nhiệm giải quyết kiến nghị?",
        options: {
            A: "Chủ đầu tư, người có thẩm quyền",
            B: "Chủ đầu tư, Hội đồng giải quyết kiến nghị",
            C: "Người có thẩm quyền, Hội đồng giải quyết kiến nghị",
            D: "Chủ đầu tư, tổ chuyên gia"
        },
        correctAnswer: "A",
        explanation: "Căn cứ khoản 1, Điều 89, \"nhà thầu, nhà đầu tư, cơ quan, tổ chức được kiến nghị người có thẩm quyền, chủ đầu tư, bên mời thầu xem xét lại các vấn đề...\". Theo quy trình giải quyết kiến nghị, đối với các vấn đề phát sinh trước khi có kết quả lựa chọn nhà thầu (ví dụ kiến nghị về nội dung hồ sơ mời thầu), nhà thầu gửi kiến nghị đến chủ đầu tư/bên mời thầu để giải quyết. Nếu không đồng ý, nhà thầu có quyền kiến nghị lên người có thẩm quyền. Do đó, cả chủ đầu tư và người có thẩm quyền đều có trách nhiệm giải quyết."
    },
    {
        id: 118,
        question: "Đối với việc giải quyết kiến nghị về kết quả lựa chọn nhà thầu, cá nhân, đơn vị nào sau đây có trách nhiệm giải quyết kiến nghị?",
        options: {
            A: "Chủ đầu tư, người có thẩm quyền",
            B: "Chủ đầu tư, Hội đồng giải quyết kiến nghị",
            C: "Người có thẩm quyền, Hội đồng giải quyết kiến nghị",
            D: "Chủ đầu tư, tổ chuyên gia"
        },
        correctAnswer: "B",
        explanation: "Căn cứ khoản 4, Điều 89 (đã được bổ sung theo Luật 90/2025/QH15 trong văn bản hợp nhất), \"Đối với kết quả lựa chọn nhà thầu, nhà đầu tư, việc giải quyết kiến nghị do chủ đầu tư, bên mời thầu, Hội đồng giải quyết kiến nghị thực hiện.\" Quy trình là: nhà thầu kiến nghị đến chủ đầu tư trước. Nếu không thỏa đáng, nhà thầu có quyền gửi kiến nghị đến Hội đồng tư vấn giải quyết kiến nghị (do người có thẩm quyền thành lập)."
    },
    {
        id: 119,
        question: "Trường hợp đang trong quá trình giải quyết kiến nghị mà nhà thầu gửi đơn khiếu nại thì việc giải quyết kiến nghị được xử lý thế nào",
        options: {
            A: "Tiếp tục giải quyết kiến nghị",
            B: "Chấm dứt ngay việc giải quyết kiến nghị",
            C: "Tạm dừng việc giải quyết kiến nghị đến khi có kết quả giải quyết khiếu nại",
            D: "Tất cả phương án trên đều sai"
        },
        correctAnswer: "B",
        explanation: "Căn cứ khoản 2, Điều 89, \"Trường hợp đang trong quá trình giải quyết kiến nghị mà nhà thầu, nhà đầu tư, cơ quan, tổ chức khởi kiện, khiếu nại, tố cáo thì việc giải quyết kiến nghị được chấm dứt ngay.\" Luật quy định rõ ràng về việc này để tránh tình trạng một vấn đề được xử lý đồng thời bởi nhiều cơ quan khác nhau theo các thủ tục khác nhau."
    },
    {
        id: 120,
        question: "Chi phí giải quyết kiến nghị được nhà thầu nộp cho chủ thể nào sau đây?",
        options: {
            A: "Chủ tịch Hội đồng tư vấn giải quyết kiến nghị",
            B: "Bộ phận thường trực giúp việc cho Chủ tịch Hội đồng giải quyết kiến nghị",
            C: "Chủ đầu tư",
            D: "Người có thẩm quyền"
        },
        correctAnswer: "B",
        explanation: "Căn cứ khoản 5, Điều 89, Chính phủ quy định chi tiết về quy trình giải quyết kiến nghị. Theo Nghị định hướng dẫn, khi nộp đơn kiến nghị đến Hội đồng tư vấn giải quyết kiến nghị, nhà thầu phải nộp một khoản chi phí cho bộ phận thường trực của Hội đồng để trang trải các chi phí hành chính, tổ chức họp, thuê chuyên gia (nếu cần)."
    }
];
