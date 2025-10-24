import { Question } from '../../types';

export const set17: Question[] = [
    {
        id: 161,
        question: "Đối với gói thầu đấu thầu qua mạng, trường hợp sửa đổi E-HSMT sau khi phát hành, chủ đầu tư phải đăng tải tài liệu nào sau đây trên Hệ thống?",
        options: {
            A: "Quyết định sửa đổi kèm theo những nội dung sửa đổi E-HSMT",
            B: "E-HSMT đã được sửa đổi",
            C: "Báo cáo thẩm định E-HSMT sửa đổi",
            D: "Phương án A và B đều đúng"
        },
        correctAnswer: "D",
        explanation: "Khi sửa đổi E-HSMT, để đảm bảo tính minh bạch, đầy đủ thông tin cho nhà thầu, chủ đầu tư phải đăng tải đồng thời cả quyết định sửa đổi (nêu rõ nội dung và lý do sửa đổi) và toàn bộ file E-HSMT đã được cập nhật. Điều này giúp nhà thầu nắm được cả sự thay đổi và có ngay tài liệu mới nhất để chuẩn bị hồ sơ dự thầu."
    },
    {
        id: 162,
        question: "Nhà thầu không phải đính kèm thư bảo lãnh (hoặc giấy chứng nhận bảo hiểm bảo lãnh) mà chỉ phải cam kết trong đơn dự thầu đối với gói thầu xây lắp khi nào?",
        options: {
            A: "E-HSMT yêu cầu giá trị bảo đảm dự thầu là 40 triệu đồng",
            B: "E-HSMT yêu cầu giá trị bảo đảm dự thầu là 50 triệu đồng",
            C: "E-HSMT yêu cầu giá trị bảo đảm dự thầu là 60 triệu đồng",
            D: "E-HSMT yêu cầu giá trị bảo đảm dự thầu là 100 triệu đồng"
        },
        correctAnswer: "B",
        explanation: "Theo quy định hướng dẫn về đấu thầu qua mạng (cụ thể tại các Thông tư của Bộ Kế hoạch và Đầu tư), đối với các gói thầu xây lắp có giá trị bảo đảm dự thầu nhỏ (hiện được quy định là không quá 50 triệu đồng), nhà thầu chỉ cần thực hiện cam kết trên webform khi nộp thầu mà không cần nộp thư bảo lãnh của ngân hàng. Quy định này nhằm đơn giản hóa thủ tục cho các gói thầu nhỏ."
    },
    {
        id: 163,
        question: "Bản gốc thư bảo lãnh dự thầu, giấy chứng nhận bảo hiểm bảo lãnh trong đấu thầu qua mạng được nộp như thế nào?",
        options: {
            A: "Gửi qua email đến Tổ trưởng Tổ chuyên gia",
            B: "Gửi cho Chủ đầu tư khi nhà thầu được mời vào đối chiếu tài liệu",
            C: "Gửi bản gốc đến địa chỉ bên mời thầu theo quy định trong E-HSMT",
            D: "Gửi cho Đơn vị tư vấn đấu thầu đánh giá E-HSDT"
        },
        correctAnswer: "B",
        explanation: "Trong đấu thầu qua mạng, nhà thầu chỉ cần nộp bản scan thư bảo lãnh cùng E-HSDT. Bản gốc chỉ được yêu cầu nộp để đối chiếu, xác thực trong trường hợp nhà thầu được xếp hạng thứ nhất và được mời vào giai đoạn thương thảo, hoàn thiện hợp đồng. Quy trình này giúp giảm bớt thủ tục hành chính ở giai đoạn đầu."
    },
    {
        id: 164,
        question: "Đối với đấu thầu qua mạng, quy định nào về việc mở thầu và công khai biên bản mở thầu trên Hệ thống mạng đấu thầu quốc gia là đúng?",
        options: {
            A: "Hệ thống tự động mở thầu và công khai biên bản mở thầu trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
            B: "Chủ đầu tư phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 04 giờ kể từ thời điểm đóng thầu.",
            C: "Tổ chuyên gia phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu.",
            D: "Chủ đầu tư phải mở thầu và công khai biên bản mở thầu trên Hệ thống trong thời hạn không quá 02 giờ kể từ thời điểm đóng thầu."
        },
        correctAnswer: "D",
        explanation: "Theo quy định về đấu thầu qua mạng, việc mở thầu là trách nhiệm của chủ đầu tư/bên mời thầu. Thao tác mở thầu và công khai biên bản mở thầu phải được thực hiện trên Hệ thống mạng đấu thầu quốc gia ngay sau thời điểm đóng thầu và phải hoàn thành trong vòng 02 giờ."
    },
    {
        id: 165,
        question: "Đối với gói thầu tổ chức lựa chọn nhà thầu qua mạng, trong quá trình đánh giá E-HSDT, Chủ đầu tư nhận thấy nhà thầu có tên trong biên bản mở thầu đang bị khóa tài khoản theo quy định của pháp luật về đấu thầu, E-HSDT của nhà thầu bị đánh giá như thế nào?",
        options: {
            A: "E-HSDT của nhà thầu được tiếp tục xem xét, đánh giá mà không cần phải mở khóa tài khoản trước khi ký hợp đồng",
            B: "E-HSDT của nhà thầu được tiếp tục xem xét, đánh giá nhưng chỉ được đề nghị trúng thầu khi thực hiện mở khóa tài khoản trước khi ký hợp đồng",
            C: "E-HSDT của nhà thầu không được tiếp tục xem xét, đánh giá",
            D: "Nhà thầu bị cấm tham gia hoạt động đấu thầu do có hành vi gian lận"
        },
        correctAnswer: "C",
        explanation: "Việc bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia là một chế tài xử phạt, cho thấy nhà thầu không còn đáp ứng tư cách hợp lệ theo quy định tại Điều 5 Luật Đấu thầu (cụ thể là phải có tên trên Hệ thống). Do đó, hồ sơ dự thầu (E-HSDT) của nhà thầu này sẽ bị loại ngay từ đầu và không được xem xét, đánh giá ở các bước tiếp theo."
    },
    {
        id: 166,
        question: "Đối với đấu thầu qua mạng, sau thời điểm đóng thầu, nhận định nào sau đây là đúng?",
        options: {
            A: "Nhà thầu có thể thay đổi nội dung E-HSDT nếu phát hiện sai sót",
            B: "Nhà thầu có thể tự làm rõ E-HSDT trên Hệ thống",
            C: "Nhà thầu không rút được E-HSDT trên Hệ thống",
            D: "Chủ đầu tư không được phép mở thầu khi chỉ có 01 nhà thầu tham dự"
        },
        correctAnswer: "C",
        explanation: "Một trong những nguyên tắc cơ bản của đấu thầu là tính toàn vẹn của hồ sơ dự thầu sau thời điểm đóng thầu. Nhà thầu không được phép rút hồ sơ đã nộp để đảm bảo tính công bằng và nghiêm túc của cuộc thầu. Nhà thầu chỉ có thể rút hoặc sửa đổi hồ sơ trước thời điểm đóng thầu."
    },
    {
        id: 167,
        question: "Đối với đấu thầu qua mạng, trường hợp Hệ thống gặp sự cố thì trường hợp nào được Hệ thống tự động gia hạn thời điểm đóng thầu?",
        options: {
            A: "Các gói thầu có thời điểm đóng thầu, thời điểm kết thúc chào giá trực tuyến trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ",
            B: "Các gói thầu có thời điểm đóng thầu, thời điểm kết thúc chào giá trực tuyến, thời điểm đăng tải kết quả lựa chọn nhà thầu trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ",
            C: "Các gói thầu có thời điểm đóng thầu trong thời gian từ khi Hệ thống gặp sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 04 giờ",
            D: "Các đáp án trên đều sai"
        },
        correctAnswer: "A",
        explanation: "Khi Hệ thống mạng đấu thầu quốc gia gặp sự cố kỹ thuật, những gói thầu có thời điểm đóng thầu rơi vào khoảng thời gian xảy ra sự cố sẽ không thể tiếp nhận hồ sơ. Để đảm bảo quyền lợi cho nhà thầu, hệ thống được thiết lập để tự động gia hạn thời điểm đóng thầu cho những gói thầu bị ảnh hưởng. Thời gian gia hạn thường là một khoảng nhất định (ví dụ 02 giờ) sau khi hệ thống hoạt động trở lại."
    },
    {
        id: 168,
        question: "Đối với đấu thầu qua mạng, khi tham dự thầu, nhà thầu....?",
        options: {
            A: "Chịu trách nhiệm về tính chính xác của các thông tin kê khai trên webform và file tài liệu đính kèm",
            B: "Chỉ nộp một bộ E-HSDT đối với một E-TBMT",
            C: "Chỉ được rút, sửa đổi, nộp lại E-HSDT trước thời điểm đóng thầu",
            D: "Các phương án trên đều đúng"
        },
        correctAnswer: "D",
        explanation: "Đây đều là những quy định và nguyên tắc cơ bản khi tham gia đấu thầu qua mạng. Nhà thầu phải chịu trách nhiệm về thông tin mình cung cấp (A). Mỗi gói thầu (E-TBMT) chỉ được nộp một hồ sơ dự thầu (E-HSDT) (B). Mọi thay đổi, rút hồ sơ chỉ được thực hiện trước thời điểm đóng thầu (C). Do đó, tất cả các phương án đều đúng."
    },
    {
        id: 169,
        question: "Khi nào nhà thầu phải nộp lại E-HSDT đã nộp?",
        options: {
            A: "Khi Tổ chuyên gia phát hiện E-HSDT bị lỗi kỹ thuật không mở được",
            B: "Khi Hệ thống mạng đấu thầu quốc gia gặp sự cố phải tự động gia hạn",
            C: "Khi E-HSMT được sửa đổi",
            D: "Các phương án trên đều đúng"
        },
        correctAnswer: "B",
        explanation: "Việc nộp lại E-HSDT là một tình huống đặc biệt. Khi hệ thống gặp sự cố và tự động gia hạn thời điểm đóng thầu, có thể E-HSDT đã nộp trước đó không được ghi nhận hoặc bị lỗi. Để đảm bảo chắc chắn, nhà thầu nên nộp lại E-HSDT trong khoảng thời gian được gia hạn. Các trường hợp khác thường được xử lý bằng cách làm rõ hoặc sửa đổi HSMT, chứ không yêu cầu nộp lại HSDT."
    },
    {
        id: 170,
        question: "Đối với gói thầu tổ chức đấu thầu rộng rãi qua mạng, trường hợp tại thời điểm đóng thầu mà không có nhà thầu nộp E-HSDT thì chủ đầu tư quyết định theo phương án nào sau đây?",
        options: {
            A: "Huỷ E-TBMT",
            B: "Chuyển sang hình thức đấu thầu rộng rãi không qua mạng",
            C: "Cho phép gia hạn thời điểm đóng thầu tối thiểu 05 ngày đối với gói thầu xây lắp, hỗn hợp có giá gói thầu không quá 20 tỷ đồng, gói thầu sắm hàng hoá, dịch vụ phi tư vấn có giá không quá 10 tỷ đồng",
            D: "Phương án A và C đều đúng"
        },
        correctAnswer: "C",
        explanation: "Khi không có nhà thầu nào nộp hồ sơ, cuộc thầu được xem là không thành công. Thay vì hủy thầu ngay, pháp luật cho phép chủ đầu tư gia hạn thời điểm đóng thầu để có thêm thời gian thu hút sự quan tâm của các nhà thầu. Quy định về thời gian gia hạn tối thiểu và các loại gói thầu được áp dụng là dựa trên các văn bản hướng dẫn chi tiết nhằm xử lý tình huống này một cách hiệu quả."
    }
];
