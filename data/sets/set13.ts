import { Question } from '../../types';

export const set13: Question[] = [
    {
        id: 121,
        question: "Các trường hợp nào sau đây nhà thầu không được hoàn trả chi phí giải quyết kiến nghị",
        options: {
            A: "Kiến nghị của nhà thầu được kết luận là đúng",
            B: "Một hoặc các nội dung kiến nghị của nhà thầu được kết luận là không đúng",
            C: "Nhà thầu rút đơn kiến nghị trong quá trình giải quyết kiến nghị",
            D: "Phương án B và C đều đúng"
        },
        correctAnswer: "D",
        explanation: "Theo quy định tại các văn bản hướng dẫn Luật về giải quyết kiến nghị, chi phí giải quyết kiến nghị chỉ được hoàn trả cho nhà thầu khi kiến nghị của nhà thầu được kết luận là đúng. Trong trường hợp kiến nghị được kết luận là không đúng (B) hoặc nhà thầu tự rút đơn kiến nghị (C), nhà thầu sẽ không được hoàn trả lại khoản chi phí này."
    },
    {
        id: 122,
        question: "Đối với kiến nghị về kết quả lựa chọn nhà thầu, Hội đồng giải quyết kiến nghị phải có văn bản giải quyết kiến nghị trong thời hạn bao nhiêu ngày kể từ ngày Hội đồng được thành lập?",
        options: {
            A: "25 ngày",
            B: "30 ngày",
            C: "35 ngày",
            D: "20 ngày"
        },
        correctAnswer: "D",
        explanation: "Văn bản Luật hợp nhất không quy định chi tiết thời gian này mà giao cho Chính phủ (khoản 5, Điều 89). Theo Nghị định số 24/2024/NĐ-CP (hướng dẫn Luật 22/2023/QH15), thời hạn để Hội đồng tư vấn giải quyết kiến nghị gửi văn bản báo cáo kết quả cho người có thẩm quyền là 20 ngày kể từ ngày thành lập."
    },
    {
        id: 123,
        question: "Phương án nào sau đây là đúng trong việc giải quyết kiến nghị đối với gói thầu sử dụng vốn sản xuất kinh doanh của doanh nghiệp nhà nước?",
        options: {
            A: "Hội đồng giải quyết kiến nghị do Sở Tài chính thành lập có trách nhiệm giải quyết kiến nghị cho gói thầu",
            B: "Hội đồng giải quyết kiến nghị do Bộ trưởng Bộ Tài chính thành lập có trách nhiệm giải quyết kiến nghị cho gói thầu",
            C: "Người đứng đầu doanh nghiệp nhà nước tự ban hành điều kiện, quy trình về giải quyết kiến nghị trong đơn vị mình",
            D: "Tất cả phương án A, B, C đều sai"
        },
        correctAnswer: "C",
        explanation: "Hoạt động lựa chọn nhà thầu của doanh nghiệp nhà nước sử dụng vốn sản xuất kinh doanh (không phải vốn nhà nước) không thuộc phạm vi điều chỉnh bắt buộc của Luật Đấu thầu (theo điểm d, khoản 7, Điều 3). Doanh nghiệp được tự quyết định việc áp dụng Luật hoặc tự xây dựng quy chế riêng, bao gồm cả quy trình giải quyết kiến nghị, trên cơ sở đảm bảo các nguyên tắc công bằng, minh bạch, hiệu quả."
    },
    {
        id: 124,
        question: "Đối với kiến nghị về các vấn đề trước khi có thông báo kết quả lựa chọn nhà thầu, trường hợp nhà thầu gửi đơn kiến nghị đồng thời đến người có thẩm quyền và chủ đầu tư thì chủ thể nào có trách nhiệm giải quyết kiến nghị?",
        options: {
            A: "Người có thẩm quyền",
            B: "Chủ đầu tư",
            C: "Bộ phận thường trực",
            D: "Hội đồng giải quyết kiến nghị"
        },
        correctAnswer: "B",
        explanation: "Theo quy trình giải quyết kiến nghị, đối với các vấn đề phát sinh trước khi có kết quả lựa chọn nhà thầu, nhà thầu phải gửi kiến nghị đến chủ đầu tư/bên mời thầu để giải quyết trước. Chỉ sau khi chủ đầu tư đã giải quyết mà nhà thầu không đồng ý thì mới có quyền kiến nghị lên người có thẩm quyền. Do đó, nếu gửi đồng thời, trách nhiệm giải quyết lần đầu vẫn thuộc về chủ đầu tư."
    },
    {
        id: 125,
        question: "Đối với kiến nghị về kết quả lựa chọn nhà thầu, trường hợp nhà thầu gửi đơn kiến nghị đồng thời đến bộ phận thường trực và chủ đầu tư thì chủ thể nào có trách nhiệm giải quyết kiến nghị?",
        options: {
            A: "Người có thẩm quyền",
            B: "Chủ đầu tư",
            C: "Bộ phận thường trực",
            D: "Hội đồng giải quyết kiến nghị"
        },
        correctAnswer: "B",
        explanation: "Tương tự câu 124, quy trình giải quyết kiến nghị về kết quả lựa chọn nhà thầu cũng yêu cầu nhà thầu phải gửi kiến nghị đến chủ đầu tư trước. Bộ phận thường trực (của Hội đồng tư vấn) chỉ tiếp nhận và xử lý đơn kiến nghị khi nhà thầu đã thực hiện bước giải quyết tại chủ đầu tư nhưng không thành công và gửi đơn lên cấp cao hơn. Do đó, trách nhiệm giải quyết đầu tiên vẫn là của chủ đầu tư."
    },
    {
        id: 126,
        question: "Đơn vị sự nghiệp công lập (tự chủ chi thường xuyên và chi đầu tư) thuộc tỉnh B tổ chức đấu thầu cho dự án sử dụng vốn ngân sách nhà nước thì Giám đốc Sở Tài chính Tỉnh B có trách nhiệm thành lập Hội đồng giải quyết kiến nghị cho gói thầu có kiến nghị tại Dự án này hay không?",
        options: {
            A: "Có trách nhiệm thành lập",
            B: "Không có trách nhiệm thành lập",
            C: "Thành lập khi chủ tịch UBND tỉnh yêu cầu",
            D: "Thành lập khi Giám đốc doanh nghiệp A đề nghị"
        },
        correctAnswer: "B",
        explanation: "Căn cứ khoản 5, Điều 89 và các quy định chi tiết, Hội đồng tư vấn giải quyết kiến nghị được thành lập bởi người có thẩm quyền của dự án/gói thầu đó. Trong trường hợp này, dự án sử dụng vốn ngân sách nhà nước do đơn vị sự nghiệp công lập làm chủ đầu tư, người có thẩm quyền thường là Chủ tịch UBND tỉnh B (hoặc cấp tương đương). Do đó, trách nhiệm thành lập Hội đồng thuộc về Chủ tịch UBND tỉnh B, không phải Giám đốc Sở Tài chính."
    },
    {
        id: 127,
        question: "Hội đồng giải quyết kiến nghị có quyền thực hiện việc nào sau đây?",
        options: {
            A: "Hủy thầu",
            B: "Yêu cầu chủ đầu tư tạm dừng ký kết hợp đồng",
            C: "Yêu cầu nhà thầu, chủ đầu tư và các cơ quan liên quan cung cấp thông tin của gói thầu, dự án và các thông tin liên quan khác để thực hiện nhiệm vụ",
            D: "Không công nhận kết quả lựa chọn nhà thầu"
        },
        correctAnswer: "C",
        explanation: "Hội đồng giải quyết kiến nghị là một cơ quan tư vấn, giúp người có thẩm quyền ra quyết định giải quyết kiến nghị. Để thực hiện nhiệm vụ của mình, Hội đồng có quyền yêu cầu các bên liên quan cung cấp đầy đủ thông tin, tài liệu cần thiết. Hội đồng không có thẩm quyền trực tiếp \"Hủy thầu\" (A), \"Yêu cầu tạm dừng ký hợp đồng\" (B), hay \"Không công nhận kết quả\" (D); các quyền này thuộc về người có thẩm quyền, và Hội đồng chỉ đưa ra kiến nghị."
    },
    {
        id: 128,
        question: "Đối với kiến nghị về quá trình tổ chức lựa chọn nhà thầu (không phải kiến nghị về nội dung hồ sơ mời thầu), đơn kiến nghị phải là của chủ thể nào?",
        options: {
            A: "Cá nhân, tổ chức có liên quan đến gói thầu",
            B: "Nhà thầu tham dự thầu",
            C: "Cơ quan, tổ chức quan tâm đến gói thầu",
            D: "Phương án A và C đều đúng"
        },
        correctAnswer: "B",
        explanation: "Căn cứ khoản 1, Điều 89, chủ thể có quyền kiến nghị là \"nhà thầu, nhà đầu tư, cơ quan, tổ chức\" khi thấy \"quyền, lợi ích hợp pháp bị ảnh hưởng\". Đối với các vấn đề trong quá trình tổ chức lựa chọn nhà thầu (ví dụ: quá trình đánh giá hồ sơ, kết quả lựa chọn...), chỉ những nhà thầu đã nộp hồ sơ dự thầu mới có quyền và lợi ích hợp pháp trực tiếp bị ảnh hưởng. Do đó, đơn kiến nghị phải do nhà thầu tham dự thầu đứng tên."
    },
    {
        id: 129,
        question: "Các tài liệu, thông tin nào sau đây trong việc giải quyết kiến nghị được công khai trên Hệ thống mạng đấu thầu quốc gia?",
        options: {
            A: "Nội dung kiến nghị về kết quả lựa chọn nhà thầu",
            B: "Văn bản giải quyết kiến nghị của chủ đầu tư",
            C: "Văn bản giải quyết kiến nghị của người có thẩm quyền",
            D: "Tất cả phương án trên đều đúng"
        },
        correctAnswer: "D",
        explanation: "Để đảm bảo tính minh bạch, pháp luật về đấu thầu quy định việc công khai các thông tin liên quan đến giải quyết kiến nghị. Điều này bao gồm nội dung kiến nghị của nhà thầu và các văn bản giải quyết của các cấp có thẩm quyền (chủ đầu tư, người có thẩm quyền). Việc công khai giúp cộng đồng và các bên liên quan giám sát quá trình giải quyết."
    },
    {
        id: 130,
        question: "Nhà thầu có trách nhiệm nộp chi phí giải quyết kiến nghị trong thời hạn bao lâu kể từ ngày nhận được thông báo của bộ phận thường trực?",
        options: {
            A: "03 ngày làm việc",
            B: "02 ngày làm việc",
            C: "04 ngày làm việc",
            D: "05 ngày làm việc"
        },
        correctAnswer: "D",
        explanation: "Văn bản Luật hợp nhất không quy định chi tiết thời gian này. Tuy nhiên, theo các Nghị định hướng dẫn (ví dụ, Nghị định số 24/2024/NĐ-CP), thời hạn để nhà thầu nộp chi phí giải quyết kiến nghị là 05 ngày làm việc kể từ ngày nhận được thông báo của bộ phận thường trực."
    }
];
