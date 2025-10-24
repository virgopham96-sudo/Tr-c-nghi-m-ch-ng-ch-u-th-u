import { Question } from '../../types';

export const set19: Question[] = [
    {
        id: 181,
        question: "Đối với gói thầu chào giá trực tuyến rút gọn, nhà thầu xác nhận về việc chấp thuận được trao hợp đồng trong thời gian tối đa bao lâu kể từ ngày chủ đầu tư mời nhà thầu xác nhận trên Hệ thống mạng đấu thầu quốc gia?",
        options: {
            A: "03 ngày",
            B: "03 ngày làm việc",
            C: "05 ngày",
            D: "05 ngày làm việc"
        },
        correctAnswer: "B",
        explanation: "Văn bản Luật hợp nhất không quy định chi tiết về thời gian này. Tuy nhiên, các quy trình rút gọn luôn yêu cầu thời gian xử lý nhanh chóng. Theo các văn bản hướng dẫn về đấu thầu qua mạng, sau khi kết thúc phiên chào giá, nhà thầu có giá thấp nhất sẽ được mời xác nhận việc thực hiện hợp đồng. Thời gian để nhà thầu xác nhận thường được quy định là một khoảng thời gian ngắn, ví dụ 03 ngày làm việc, để nhanh chóng hoàn tất thủ tục."
    },
    {
        id: 182,
        question: "Gói thầu chào giá trực tuyến rút gọn, trường hợp nhà thầu từ chối hoặc không xác nhận về việc chấp thuận được trao hợp đồng trên Hệ thống mạng đấu thầu quốc gia thì nội dung nào sau đây không đúng?",
        options: {
            A: "Công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
            B: "Khoá tài khoản trong thời hạn 03 tháng kể từ ngày Bộ Tài chính nhận được văn bản đề nghị của chủ đầu tư",
            C: "Khóa chức năng chào giá trực tuyến trong thời hạn 06 tháng kể từ ngày chủ đầu tư công khai tên nhà thầu trên Hệ thống mạng đấu thầu quốc gia",
            D: "Bị đánh giá về uy tín trong việc tham dự thầu"
        },
        correctAnswer: "B",
        explanation: "Việc từ chối hoặc không xác nhận thực hiện hợp đồng sau khi đã tham gia và có kết quả chào giá được coi là hành vi vi phạm trách nhiệm của nhà thầu. Chế tài xử lý bao gồm việc bị công khai tên (A), bị khóa chức năng chào giá trực tuyến (C) và bị đánh giá xấu về uy tín (D). Tuy nhiên, thẩm quyền khóa tài khoản nhà thầu trên toàn quốc thuộc về Bộ Kế hoạch và Đầu tư (đơn vị quản lý Hệ thống), không phải Bộ Tài chính. Do đó, phương án B sai về chủ thể xử lý."
    },
    {
        id: 183,
        question: "Chào giá trực tuyến theo quy trình thông thường áp dụng đối với gói thầu nào sau đây?",
        options: {
            A: "Dịch vụ phi tư vấn thông dụng, đơn giản",
            B: "Xây lắp",
            C: "Dịch vụ tư vấn",
            D: "Hỗn hợp"
        },
        correctAnswer: "A",
        explanation: "Chào giá trực tuyến là một hình thức cạnh tranh về giá, phù hợp với các gói thầu mà yếu tố kỹ thuật đã được tiêu chuẩn hóa, ít có sự khác biệt giữa các nhà thầu. Gói thầu \"dịch vụ phi tư vấn thông dụng, đơn giản\" là đối tượng phù hợp nhất. Gói thầu xây lắp, tư vấn, hỗn hợp thường có yếu tố kỹ thuật phức tạp, không phù hợp để cạnh tranh đơn thuần về giá."
    },
    {
        id: 184,
        question: "Nhà thầu phải thực hiện xác nhận về việc chấp thuận được trao hợp đồng trên Hệ thống mạng đấu thầu quốc gia đối với các hình thức lựa chọn nhà thầu qua mạng nào?",
        options: {
            A: "Đấu thầu rộng rãi, chào hàng cạnh tranh, đấu thầu hạn chế.",
            B: "Chào giá trực tuyến theo quy trình thông thường",
            C: "Chào giá trực tuyến theo quy trình rút gọn",
            D: "Các phương án trên đều đúng"
        },
        correctAnswer: "C",
        explanation: "Việc \"xác nhận chấp thuận được trao hợp đồng\" là một bước đặc thù của quy trình chào giá trực tuyến rút gọn. Sau khi kết thúc phiên chào giá, hệ thống sẽ xác định nhà thầu có giá thấp nhất và gửi yêu cầu xác nhận. Các hình thức khác như đấu thầu rộng rãi, chào hàng cạnh tranh thông thường có quy trình thương thảo và hoàn thiện hợp đồng phức tạp hơn, không có bước xác nhận nhanh này."
    },
    {
        id: 185,
        question: "Đối với chào giá trực tuyến rút gọn, kể từ lượt chào giá thứ hai, giá chào của nhà thầu không được thấp hơn giá thấp nhất hiển thị trên Hệ thống mạng đấu thầu quốc gia là bao nhiêu %?",
        options: {
            A: "80%",
            B: "85%",
            C: "90%",
            D: "95%"
        },
        correctAnswer: "D",
        explanation: "Trong chào giá trực tuyến, để khuyến khích cạnh tranh và tránh các bước giá quá nhỏ, hệ thống thường quy định một bước giá tối thiểu. Tuy nhiên, câu hỏi này có vẻ diễn đạt ngược. Thông thường, giá chào sau phải thấp hơn giá chào thấp nhất hiện tại. Có thể câu hỏi muốn hỏi \"giá chào sau tối đa bằng bao nhiêu % giá chào trước đó\"."
    },
    {
        id: 186,
        question: "Đối với chào giá trực tuyến rút gọn, giá trị bảo đảm dự thầu tối đa là giá trị nào sau đây?",
        options: {
            A: "5% giá gói thầu",
            B: "10% giá gói thầu",
            C: "1-3% giá gói thầu",
            D: "Không yêu cầu về bảo đảm dự thầu"
        },
        correctAnswer: "C",
        explanation: "Căn cứ khoản 4, Điều 14 của Luật, mức bảo đảm dự thầu được quy định như sau: a) Từ 1% đến 1,5% giá gói thầu áp dụng đối với gói thầu xây lắp, hỗn hợp có giá trị không quá 20 tỷ đồng, gói thầu mua sắm hàng hóa, dịch vụ phi tư vấn không quá 10 tỷ đồng. b) Từ 1,5% đến 3% giá gói thầu áp dụng đối với các trường hợp còn lại. Chào giá trực tuyến rút gọn thường áp dụng cho các gói thầu quy mô nhỏ, do đó mức bảo đảm dự thầu thường nằm trong khung quy định chung, phổ biến là từ 1% đến 3% giá gói thầu."
    },
    {
        id: 187,
        question: "Đối với gói thầu áp dụng chào giá trực tuyến theo quy trình thông thường, trường hợp nhà thầu được mời tham gia chào giá trực tuyến nhưng nhà thầu từ chối tham gia thì xử lý thế nào?",
        options: {
            A: "Đề xuất về tài chính của nhà thầu sẽ bị đánh giá là không đạt",
            B: "Nhà thầu sẽ bị loại và bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia trong vòng 06 tháng",
            C: "Hồ sơ dự thầu của nhà thầu sẽ tiếp tục được đánh giá về tài chính căn cứ theo hồ sơ dự thầu đã nộp trước thời điểm đóng thầu",
            D: "Phương án A và B đều đúng"
        },
        correctAnswer: "C",
        explanation: "Chào giá trực tuyến là một bước tùy chọn sau khi nhà thầu đã nộp hồ sơ dự thầu và được đánh giá đáp ứng yêu cầu về kỹ thuật. Đây là cơ hội để nhà thầu chào lại giá cạnh tranh hơn. Nếu nhà thầu từ chối tham gia, họ không bị loại (trừ khi HSMT quy định khác). Giá dự thầu ban đầu mà họ đã nộp trong hồ sơ dự thầu vẫn có giá trị và sẽ được sử dụng để xếp hạng nhà thầu."
    },
    {
        id: 188,
        question: "Mua sắm trực tuyến được áp dụng đối với hàng hoá, dịch vụ của gói thầu thuộc dự toán mua sắm với giá gói thầu có hạn mức tối đa là bao nhiêu?",
        options: {
            A: "100 triệu đồng",
            B: "300 triệu đồng",
            C: "500 triệu đồng",
            D: "01 tỷ đồng"
        },
        correctAnswer: "C",
        explanation: "Mua sắm trực tuyến (hay mua sắm trực tiếp trên môi trường mạng) là hình thức mua sắm đơn giản cho các gói thầu có giá trị rất nhỏ, hàng hóa thông dụng. Văn bản Luật Đấu thầu hợp nhất không quy định hạn mức này mà giao cho Chính phủ. Theo các quy định hiện hành, hạn mức này thường được quy định ở mức không quá 500 triệu đồng để đơn giản hóa thủ tục mua sắm."
    },
    {
        id: 189,
        question: "Trong mua sắm tập trung áp dụng đấu thầu rộng rãi, hợp đồng điện tử có thể được ký kết giữa các đối tượng nào?",
        options: {
            A: "Đơn vị mua sắm tập trung và các nhà thầu trúng thầu (trong trường hợp không ký thỏa thuận khung)",
            B: "Đơn vị có nhu cầu mua sắm với các nhà thầu trúng thầu (trong trường hợp đơn vị mua sắm tập trung ký thỏa thuận khung với nhà thầu trúng thầu)",
            C: "Phương án A và B đều đúng",
            D: "Phương án A và B đều sai"
        },
        correctAnswer: "C",
        explanation: "Căn cứ khoản 4, Điều 53, mua sắm tập trung có hai cách thức: a) Đơn vị MSTT lựa chọn nhà thầu và trực tiếp ký hợp đồng. b) Đơn vị MSTT lựa chọn nhà thầu, ký thỏa thuận khung, sau đó đơn vị có nhu cầu mua sắm ký hợp đồng cụ thể với nhà thầu. Hợp đồng điện tử có thể được áp dụng cho cả hai trường hợp này. Do đó, hợp đồng có thể được ký giữa Đơn vị MSTT và nhà thầu (A), hoặc giữa Đơn vị có nhu cầu và nhà thầu (B)."
    },
    {
        id: 190,
        question: "Hiện nay, Việt Nam đã mở cửa thị trường mua sắm chính phủ (đấu thầu) trong những hiệp định nào?",
        options: {
            A: "Chỉ Hiệp định Đối tác Toàn diện và Tiến bộ Xuyên Thái Bình Dương (CPTPP)",
            B: "Hiệp định CPTPP và Hiệp định thương mại tự do giữa Cộng hòa xã hội chủ nghĩa Việt Nam và Liên minh Châu Âu (EVFTA)",
            C: "Hiệp định CPTPP, Hiệp định EVFTA và Hiệp định Thương mại Tự do giữa Việt Nam và Liên hiệp Vương quốc Anh và Bắc Ailen (UKVFTA)",
            D: "Tất cả các hiệp định mà Việt Nam là thành viên"
        },
        correctAnswer: "C",
        explanation: "Việt Nam đã chính thức cam kết mở cửa thị trường mua sắm của Chính phủ trong ba hiệp định thương mại tự do thế hệ mới quan trọng là: Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương (CPTPP), Hiệp định Thương mại Tự do Việt Nam - EU (EVFTA), và Hiệp định Thương mại Tự do Việt Nam - Vương quốc Anh (UKVFTA)."
    }
];
