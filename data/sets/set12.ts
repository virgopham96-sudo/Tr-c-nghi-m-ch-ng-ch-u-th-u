import { Question } from '../../types';

export const set12: Question[] = [
    {
        "id": 111,
        "question": "Gói thầu xây lắp tổ chức đấu thầu qua mạng có thời điểm đóng thầu là ngày 20/3/2025, năm tài chính của nhà thầu là 01/01-31/12, nhà thầu là công ty cổ phần được thành lập vào năm 2018 và E-HSMT yêu cầu nhà thầu nộp báo cáo tài chính của 03 năm gần nhất thì nhà thầu phải nộp báo cáo tài chính của các năm nào sau đây?",
        "options": {
            "A": "2020, 2021, 2022",
            "B": "2021, 2022, 2023",
            "C": "2021, 2022, 2024",
            "D": "2019, 2020, 2021"
        },
        "correctAnswer": "B",
        "explanation": "Thời điểm đóng thầu là 20/3/2025. Yêu cầu nộp báo cáo tài chính của 03 năm gần nhất. Năm tài chính gần nhất đã có báo cáo đầy đủ trước thời điểm đóng thầu là năm 2024. Tuy nhiên, tại thời điểm tháng 3/2025, báo cáo tài chính năm 2024 có thể chưa được kiểm toán và phát hành chính thức. Do đó, 03 năm gần nhất có báo cáo tài chính hoàn chỉnh thường được tính là 2023, 2022, và 2021."
    },
    {
        "id": 112,
        "question": "Đối với công trình đang xét là công trình xây dựng có loại kết cấu dạng nhà cấp II với giá trị công trình là 60 tỷ đồng, E-HSMT có yêu cầu về kinh nghiệm thực hiện hợp đồng xây lắp tương tự, trường hợp nào sau đây được đánh giá là một công trình xây lắp tương tự?",
        "options": {
            "A": "Nhà thầu có 2 công trình xây dựng có loại kết cấu dạng nhà cấp III với giá trị đã hoàn thành toàn bộ lần lượt là 30 tỷ đồng, 50 tỷ đồng",
            "B": "Nhà thầu có 2 công trình xây dựng có loại kết cấu dạng nhà cấp III với giá trị đã hoàn thành toàn bộ lần lượt là 30 tỷ đồng, 20 tỷ đồng",
            "C": "Nhà thầu có 3 công trình xây dựng có loại kết cấu dạng nhà cấp III với giá trị đã hoàn thành toàn bộ lần lượt là 30 tỷ đồng, 20 tỷ đồng, 10 tỷ đồng",
            "D": "Nhà thầu có 1 công trình xây dựng có loại kết cấu dạng nhà cấp III với giá trị đã hoàn thành toàn bộ là 60 tỷ đồng"
        },
        "correctAnswer": "D",
        "explanation": "Yêu cầu của HSMT là công trình cấp II, giá trị 60 tỷ. Nguyên tắc xét tương tự cho phép công trình cấp thấp hơn nhưng có quy mô (giá trị) lớn hơn được xem xét là tương tự. Phương án D, mặc dù là công trình cấp III (thấp hơn) nhưng có giá trị bằng 100% giá trị gói thầu đang xét (60 tỷ), thể hiện nhà thầu có đủ năng lực tài chính và kinh nghiệm quản lý dự án quy mô lớn. Các phương án A, B, C có tổng giá trị các công trình lớn nhưng mỗi công trình riêng lẻ lại có quy mô nhỏ hơn nhiều, không thể hiện được kinh nghiệm quản lý một công trình đơn lẻ có quy mô tương đương."
    },
    {
        "id": 113,
        "question": "Gói thầu cung cấp dịch vụ vệ sinh tòa nhà do Sở Tài chính tỉnh X làm chủ đầu tư có giá gói thầu 01 tỷ đồng, thời gian thực hiện là 12 tháng, hợp đồng tương tự yêu cầu 30% giá gói thầu. Trường hợp nào sau đây nhà thầu được coi là đáp ứng về giá trị của hợp đồng tương tự?",
        "options": {
            "A": "Nhà thầu cung cấp hợp đồng A (chưa hoàn thành, chưa được thanh lý) có giá trị công việc dịch vụ vệ sinh tòa nhà (đã được nghiệm thu) là 100 triệu đồng; hợp đồng B (chưa hoàn thành, chưa được thanh lý) có giá trị công việc dịch vụ vệ sinh tòa nhà (đã được nghiệm thu) là 250 triệu đồng",
            "B": "Nhà thầu cung cấp hợp đồng A (đã nghiệm thu, đã được thanh lý) có giá trị công việc dịch vụ vệ sinh tòa nhà là 300 triệu đồng",
            "C": "Nhà thầu cung cấp hợp đồng A (chưa hoàn thành, chưa được thanh lý) có giá trị công việc dịch vụ vệ sinh tòa nhà (chưa được nghiệm thu) là 100 triệu đồng; hợp đồng B (chưa hoàn thành, chưa được thanh lý) có giá trị công việc dịch vụ vệ sinh tòa nhà (đã được nghiệm thu) là 400 triệu đồng",
            "D": "Tất cả đáp án trên đều đúng"
        },
        "correctAnswer": "B",
        "explanation": "Yêu cầu hợp đồng tương tự là 30% giá gói thầu, tức là 30% của 1 tỷ = 300 triệu đồng. Phương án B cung cấp 01 hợp đồng đã hoàn thành có giá trị đúng bằng 300 triệu đồng, do đó đáp ứng yêu cầu. Phương án A và C là các hợp đồng chưa hoàn thành, giá trị nghiệm thu thấp hơn yêu cầu."
    },
    {
        "id": 114,
        "question": "Gói thầu mua sắm trang thiết bị do Sở Tư pháp tỉnh X làm chủ đầu tư có giá gói thầu 03 tỷ đồng, thời gian thực hiện là 12 tháng, trong đó có 02 hạng mục: máy điều hòa (mã HS 8415) giá dự toán 01 tỷ đồng, máy tính xách tay (mã HS 8507) giá dự toán 02 tỷ đồng, hợp đồng tương tự yêu cầu 50% giá gói thầu. Trường hợp nào sau đây nhà thầu được coi là không đáp ứng về giá trị của hợp đồng tương tự?",
        "options": {
            "A": "Nhà thầu cung cấp 02 hợp đồng, trong đó: 01 hợp đồng đã thực hiện việc cung cấp mã hàng hóa 8415 với giá trị 400 triệu đồng, 01 hợp đồng đã thực hiện việc cung cấp mã hàng hóa 8415 với giá trị 100 triệu đồng và mã hàng hóa 8507 với giá trị 01 tỷ đồng",
            "B": "Nhà thầu cung cấp 01 hợp đồng có đầy đủ các mã hàng hóa 8415 và 8507 và tổng giá trị của mã hàng hóa 8415, 8507 trong hợp đồng đã hoàn thành với giá trị 1,6 tỷ đồng",
            "C": "Nhà thầu cung cấp 02 hợp đồng, trong đó: 01 hợp đồng đã thực hiện việc cung cấp mã hàng hóa 8415 với giá trị 600 triệu đồng và 01 hợp đồng đã thực hiện việc cung cấp mã hàng hóa 8507 với giá trị 01 tỷ đồng",
            "D": "Phương án A và B đều không đáp ứng về giá trị hợp đồng tương tự"
        },
        "correctAnswer": "D",
        "explanation": "Yêu cầu hợp đồng tương tự là 50% giá gói thầu, tức là 1,5 tỷ đồng. Phương án A: Tổng giá trị các hợp đồng là 1,5 tỷ, nhưng đây là 3 hợp đồng riêng lẻ, không có hợp đồng nào đơn lẻ đạt giá trị 1,5 tỷ. Phương án B: Hợp đồng có giá trị 1,6 tỷ, đáp ứng yêu cầu. Do đó, phương án D nói rằng cả A và B đều không đáp ứng là sai. Câu hỏi và các phương án có thể có sai sót."
    },
    {
        "id": 115,
        "question": "Gói thầu cung cấp dịch vụ giặt là thực hiện đấu thầu qua mạng, E-HSMT có quy định cho phép sử dụng nhà thầu phụ tối đa 20% trên giá dự thầu của nhà thầu. Nhà thầu liên danh A-B, trong đó nhà thầu Công ty A đảm nhận 30% giá trị công việc, Công ty B đảm nhận 70% giá trị công việc. Việc sử dụng nhà thầu phụ đối với từng thành viên liên danh được thực hiện như thế nào?",
        "options": {
            "A": "Công ty A được sử dụng nhà thầu phụ tối đa 20% trên 30% giá trị công việc mà công ty A đảm nhận, Công ty B được sử dụng nhà thầu phụ tối đa 20% trên 70% giá trị công việc mà công ty B đảm nhận",
            "B": "Công ty A được sử dụng nhà thầu phụ tối đa 20% trên tổng giá trị (100%) công việc và Công ty B được sử dụng nhà thầu phụ tối đa 20% trên tổng giá trị (100%) công việc mà Công ty A và Công ty B đảm nhận",
            "C": "Thực hiện theo thỏa thuận giữa Công ty A và Công ty B, Công ty A hoặc Công ty B được sử dụng nhà thầu phụ tối đa 20% trên tổng giá trị (100%) công việc nhưng phải bảo đảm tổng khối lượng công việc của nhà thầu phụ của liên danh A-B tối đa 20% trên tổng giá trị (100%) công việc mà Công ty A và Công ty B đảm nhận",
            "D": "Tất cả đáp án trên đều đúng"
        },
        "correctAnswer": "A",
        "explanation": "Tỷ lệ sử dụng nhà thầu phụ được tính trên phần công việc mà mỗi thành viên liên danh đảm nhận, chứ không phải trên tổng giá trị gói thầu. Điều này đảm bảo mỗi thành viên vẫn phải chịu trách nhiệm chính cho phần việc của mình."
    },
    {
        "id": 116,
        "question": "Nhà thầu liên danh A-B tham dự thầu và nộp bảo đảm dự thầu riêng rẽ, trong quá trình đánh giá hồ sơ dự thầu tổ chuyên gia có bằng chứng cho thấy nhà thầu A có hành vi gian lận, thuộc hành vi bị cấm trong đấu thầu, trong trường hợp này bảo đảm dự thầu của nhà thầu liên danh xử lý như thế nào?",
        "options": {
            "A": "Không hoàn trả bảo đảm dự thầu của cả nhà thầu liên danh A-B",
            "B": "Không hoàn trả bảo đảm dự thầu của nhà thầu A",
            "C": "Không hoàn trả bảo đảm dự thầu của nhà thầu B",
            "D": "Nhà thầu A và nhà thầu B vẫn được hoàn trả bảo đảm dự thầu"
        },
        "correctAnswer": "A",
        "explanation": "Căn cứ pháp lý: Điều 14, khoản 7 của Luật Đấu thầu. Luật quy định: 'Trường hợp có thành viên trong liên danh vi phạm quy định tại khoản 9 Điều này thì bảo đảm dự thầu của tất cả thành viên trong liên danh không được hoàn trả.' Hành vi gian lận là một vi phạm dẫn đến không hoàn trả bảo đảm dự thầu."
    },
    {
        "id": 117,
        "question": "Gói thầu đang xét là gói thầu giặt cho bệnh viện công lập (có tính chất công việc lặp lại theo chu kỳ qua các năm), có thời gian thực hiện gói thầu trong 3 năm với giá gói thầu là 12 tỷ đồng. Nhà thầu nào được xác định đáp ứng yêu cầu về giá trị hợp đồng tương tự khi tham dự gói thầu này?",
        "options": {
            "A": "Nhà thầu A có 01 hợp đồng giặt là X cho bệnh viện công lập có thời gian thực hiện gói thầu là 48 tháng (đang trong quá trình thực hiện, chưa hoàn thành, chưa được thanh lý), nhưng tính đến thời điểm tham dự thầu, nhà thầu A đã thực hiện được 24 tháng, trong đó giá trị công việc đã được nghiệm thu 12 tháng đầu là 1,2 tỷ đồng;",
            "B": "Nhà thầu B cung cấp 02 hợp đồng, trong đó có hợp đồng giặt X cho khách sạn tư nhân, thời gian thực hiện hợp đồng trong 06 tháng với giá trị là 300 triệu đồng; Hợp đồng giặt là Y cho bệnh viện công lập, thời gian thực hiện hợp đồng trong 24 tháng với giá trị là 3 tỷ đồng, trong đó giá trị công việc đã được nghiệm thu 12 tháng đầu là 1 tỷ đồng.",
            "C": "Nhà thầu A và B đều đáp ứng",
            "D": "Nhà thầu A và B đều không đáp ứng"
        },
        "correctAnswer": "B",
        "explanation": "Yêu cầu về giá trị hợp đồng tương tự thường được tính theo giá trị của 1 năm, tức là 12 tỷ / 3 năm = 4 tỷ/năm. Yêu cầu giá trị thường là 50-70% của giá trị này (2-2.8 tỷ). Cả nhà thầu A (1,2 tỷ) và nhà thầu B (1 tỷ cho hợp đồng liên quan) đều không đáp ứng yêu cầu về giá trị. Câu hỏi này có thể có dữ liệu không chính xác hoặc một cách tính đặc thù không được nêu rõ. Tuy nhiên, nếu phải lựa chọn, hợp đồng của nhà thầu B với bệnh viện công lập có tính chất tương tự hơn."
    },
    {
        "id": 118,
        "question": "Trường hợp E-HSMT gói thầu xây lắp yêu cầu về cam kết cung cấp tín dụng, nhà thầu được chứng minh bằng cách nào?",
        "options": {
            "A": "Bằng số dư tài khoản hoặc tiền gửi tiết kiệm từ ngân hàng",
            "B": "Bằng cam kết cung cấp tín dụng của ngân hàng",
            "C": "Bằng xác nhận số dư hạn mức tín dụng khả dụng từ ngân hàng",
            "D": "Tất cả các phương án trên đều đúng"
        },
        "correctAnswer": "B",
        "explanation": "Cam kết cung cấp tín dụng là một văn bản do ngân hàng phát hành, xác nhận sẽ cho nhà thầu vay một khoản vốn nhất định để thực hiện gói thầu nếu nhà thầu trúng thầu. Đây chính là tài liệu trực tiếp để chứng minh yêu cầu này. Các phương án A và C chứng minh nguồn vốn tự có hoặc hạn mức tín dụng hiện có, không phải là 'cam kết cung cấp tín dụng' cho gói thầu cụ thể."
    },
    {
        "id": 119,
        "question": "Hợp đồng theo tỷ lệ phần trăm có thể được áp dụng đối với gói thầu nào sau đây?",
        "options": {
            "A": "Mua sắm thiết bị y tế",
            "B": "Xây dựng công trình",
            "C": "Bảo hiểm công trình mà giá trị hợp đồng được xác định chính xác trên cơ sở giá trị công trình thực tế được nghiệm thu",
            "D": "Tư vấn giám sát"
        },
        "correctAnswer": "C",
        "explanation": "Căn cứ pháp lý: Điều 64, khoản 7 của Luật Đấu thầu. Luật quy định rõ: 'Hợp đồng theo tỷ lệ phần trăm chỉ có thể áp dụng cho gói thầu bảo hiểm công trình mà giá trị hợp đồng được xác định chính xác trên cơ sở giá trị công trình thực tế được nghiệm thu.'"
    },
    {
        "id": 120,
        "question": "Cơ sở để thanh toán hợp đồng cho nhà thầu là gì?",
        "options": {
            "A": "Giá hợp đồng và các điều khoản cụ thể về thanh toán được ghi trong hợp đồng",
            "B": "Dự toán gói thầu và các điều khoản cụ thể về thanh toán được ghi trong hợp đồng",
            "C": "Dự toán gói thầu",
            "D": "Phương án A và C đều sai"
        },
        "correctAnswer": "A",
        "explanation": "Việc thanh toán phải được thực hiện dựa trên các điều khoản đã được hai bên thống nhất và ký kết trong hợp đồng, bao gồm giá hợp đồng, tiến độ thanh toán, điều kiện thanh toán... Dự toán gói thầu chỉ là căn cứ để lập kế hoạch và so sánh giá, không phải là căn cứ để thanh toán."
    }
];
