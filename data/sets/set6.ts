import { Question } from '../../types';

export const set6: Question[] = [
    {
        id: 51,
        question: "Nội dung nào không phải là tiêu chuẩn đánh giá về kỹ thuật của gói thầu tư vấn?",
        options: {
            A: "Giải pháp phương pháp luận",
            B: "Uy tín của nhà thầu thông qua việc tham dự thầu, kết quả thực hiện hợp đồng của nhà thầu",
            C: "Đã thực hiện nghĩa vụ kê khai thuế và nộp thuế",
            D: "Kinh nghiệm và năng lực nhà thầu"
        },
        correctAnswer: "C",
        explanation: "Tiêu chuẩn đánh giá về kỹ thuật đối với gói thầu tư vấn tập trung vào chất lượng đề xuất của nhà thầu, như giải pháp, phương pháp luận, nhân sự, và các yếu tố kỹ thuật khác. Các nội dung về uy tín, kinh nghiệm (B, D) thuộc về đánh giá năng lực, kinh nghiệm. Việc thực hiện nghĩa vụ thuế là một điều kiện thuộc về tư cách hợp lệ, không phải là tiêu chuẩn để đánh giá chất lượng kỹ thuật của đề xuất."
    },
    {
        id: 52,
        question: "Một trong các căn cứ lập hồ sơ mời thầu là?",
        options: {
            A: "Báo giá của nhà thầu",
            B: "Quyết định mua sắm được phê duyệt",
            C: "Kế hoạch lựa chọn nhà thầu được duyệt",
            D: "Phương án A và B đều đúng"
        },
        correctAnswer: "C",
        explanation: "Căn cứ Điều 37, 38, 39, Kế hoạch lựa chọn nhà thầu là tài liệu được lập cho dự án/dự toán mua sắm và được người có thẩm quyền/chủ đầu tư phê duyệt. Nó bao gồm các nội dung cốt lõi như giá gói thầu, hình thức và phương thức lựa chọn nhà thầu, loại hợp đồng, thời gian thực hiện. Đây chính là căn cứ pháp lý và cơ sở trực tiếp nhất để chủ đầu tư/bên mời thầu lập hồ sơ mời thầu cho một gói thầu cụ thể."
    },
    {
        id: 53,
        question: "Đối với gói thầu cung cấp dịch vụ tư vấn, phương pháp đánh giá nào không được áp dụng?",
        options: {
            A: "Giá thấp nhất",
            B: "Giá đánh giá",
            C: "Kết hợp giữa kỹ thuật và giá",
            D: "Giá cố định"
        },
        correctAnswer: "B",
        explanation: "Điều 59 quy định các phương pháp đánh giá hồ sơ dự thầu đối với gói thầu cung cấp dịch vụ tư vấn, bao gồm: phương pháp giá thấp nhất, phương pháp giá cố định, kết hợp giữa kỹ thuật và giá, và phương pháp dựa trên kỹ thuật. Phương pháp \"giá đánh giá\" được quy định tại khoản 2, Điều 58, là phương pháp áp dụng cho gói thầu mua sắm hàng hóa, xây lắp, phi tư vấn, không áp dụng cho gói thầu tư vấn."
    },
    {
        id: 54,
        question: "Nội dung nào sau đây không thuộc hồ sơ mời thầu?",
        options: {
            A: "Chỉ dẫn nhà thầu, tùy chọn mua thêm",
            B: "Bảng dữ liệu đấu thầu",
            C: "Phạm vi cung cấp, yêu cầu về kỹ thuật",
            D: "Biên bản hoàn thiện hợp đồng"
        },
        correctAnswer: "D",
        explanation: "Căn cứ Điều 44, hồ sơ mời thầu bao gồm các yêu cầu về chỉ dẫn nhà thầu, tiêu chuẩn đánh giá, dự thảo hợp đồng và các nội dung khác. Các tài liệu như chỉ dẫn nhà thầu, bảng dữ liệu, phạm vi cung cấp là các thành phần cơ bản của hồ sơ mời thầu. \"Biên bản hoàn thiện hợp đồng\" là tài liệu được lập sau quá trình lựa chọn nhà thầu, trong giai đoạn thương thảo, hoàn thiện hợp đồng với nhà thầu được lựa chọn, do đó nó không thuộc hồ sơ mời thầu được phát hành ban đầu."
    },
    {
        id: 55,
        question: "Trường hợp nào hồ sơ mời thầu được đưa ra yêu cầu về giấy phép bán hàng?",
        options: {
            A: "Hàng hóa thông thường, có sẵn trên thị trường",
            B: "Hàng hóa nhập khẩu",
            C: "Hàng hóa đặc thù, phức tạp cần gắn với trách nhiệm của nhà sản xuất",
            D: "Hàng hóa có giá trị lớn"
        },
        correctAnswer: "C",
        explanation: "Luật Đấu thầu không quy định bắt buộc phải có giấy phép bán hàng cho mọi loại hàng hóa. Tuy nhiên, trong hồ sơ mời thầu đối với các gói thầu mua sắm hàng hóa có tính chất đặc thù, phức tạp, đòi hỏi trách nhiệm cao của nhà sản xuất trong việc cung cấp các dịch vụ sau bán hàng như bảo hành, bảo trì, cung cấp phụ tùng thay thế (ví dụ: thiết bị y tế chuyên sâu, hệ thống công nghệ thông tin lớn), chủ đầu tư có thể yêu cầu nhà thầu phải có giấy phép bán hàng hoặc giấy ủy quyền bán hàng của nhà sản xuất để đảm bảo tính hợp pháp và trách nhiệm đối với hàng hóa cung cấp."
    },
    {
        id: 56,
        question: "Nội dung nào sau đây nếu đưa vào E-HSMT gói thầu mua sắm hàng hóa có thể bị đánh giá là hạn chế cạnh tranh?",
        options: {
            A: "Yêu cầu nhà thầu cung cấp tài liệu chứng minh hợp đồng tương tự",
            B: "Yêu cầu nhà thầu phải là chủ sở hữu thiết bị chào thầu",
            C: "Yêu cầu nhà thầu có năng lực tài chính lành mạnh",
            D: "Yêu cầu nhà thầu phải hoàn thành nghĩa vụ thuế"
        },
        correctAnswer: "B",
        explanation: "Căn cứ khoản 3, Điều 44, \"Hồ sơ mời thầu không được nêu điều kiện dẫn đến làm hạn chế sự tham gia của nhà thầu hoặc nhằm tạo lợi thế cho một hoặc một số nhà thầu gây ra sự cạnh tranh không bình đẳng\". Việc yêu cầu nhà thầu phải là \"chủ sở hữu\" của thiết bị là một yêu cầu quá mức, tạo rào cản cho các nhà thầu thương mại hoặc các nhà thầu có khả năng huy động thiết bị từ các nguồn hợp pháp khác (thuê, mượn, đại lý phân phối...). Điều này làm hạn chế đáng kể sự tham gia của các nhà thầu, do đó bị coi là hạn chế cạnh tranh. Các yêu cầu còn lại (A, C, D) là các tiêu chí hợp lệ để đánh giá năng lực, kinh nghiệm của nhà thầu."
    },
    {
        id: 57,
        question: "Gói thầu mua sắm máy điều hòa không khí của Sở Tài chính tỉnh X được tổ chức đấu thầu tập trung theo hình thức đấu thầu rộng rãi qua mạng thì E-HSMT có được nêu xuất xứ hàng hóa không?",
        options: {
            A: "Được nêu xuất xứ cụ thể của một nước bất kỳ",
            B: "Được nêu xuất xứ theo nhóm nước, vùng lãnh thổ",
            C: "Được nêu xuất xứ cụ thể của một nước bất kỳ nhưng phải kèm theo cụm từ \"hoặc tương đương\"",
            D: "Không được nêu xuất xứ theo nhóm nước, vùng lãnh thổ"
        },
        correctAnswer: "B",
        explanation: "Căn cứ khoản 2, Điều 44, \"Hồ sơ mời thầu được nêu xuất xứ theo nhóm nước, vùng lãnh thổ...\". Đồng thời, điểm i, khoản 6, Điều 16 cấm việc \"Nêu yêu cầu cụ thể về... xuất xứ hàng hóa\". Kết hợp hai quy định này, hồ sơ mời thầu được phép nêu xuất xứ theo một nhóm nước hoặc vùng lãnh thổ (ví dụ: các nước ASEAN, các nước EU) nhưng không được chỉ định một quốc gia cụ thể."
    },
    {
        id: 58,
        question: "Gói thầu mua sắm hàng hóa có khối lượng, số lượng công việc căn cứ nhu cầu theo các năm và thời gian thực hiện gói thầu là 02 năm thì E-HSMT quy định về giá trị của hợp đồng tương tự như thế nào?",
        options: {
            A: "Có giá trị bằng 50% giá gói thầu",
            B: "Có giá trị bằng 70% giá gói thầu",
            C: "Có giá trị bằng 50% giá trị theo chu kỳ 01 năm của gói thầu",
            D: "Có giá trị tối thiểu bằng 50% giá gói thầu"
        },
        correctAnswer: "C",
        explanation: "Văn bản Luật Đấu thầu hợp nhất không quy định chi tiết về cách tính này. Tuy nhiên, theo các nguyên tắc đấu thầu và văn bản hướng dẫn thi hành, đối với các gói thầu thực hiện trong nhiều năm, yêu cầu về kinh nghiệm (giá trị hợp đồng tương tự) thường được xác định dựa trên quy mô trung bình của một năm (hoặc một chu kỳ 12 tháng) để tạo điều kiện cho nhiều nhà thầu tham gia, tránh việc yêu cầu một hợp đồng duy nhất có giá trị bằng tổng giá trị của cả 2 năm sẽ gây hạn chế cạnh tranh. Do đó, phương án C là hợp lý nhất."
    },
    {
        id: 59,
        question: "Trong quá trình đánh giá hồ sơ dự thầu gói thầu áp dụng đấu thầu rộng rãi, chủ đầu tư phát hiện người đại diện theo pháp luật của 02 nhà thầu tham dự thầu là anh em ruột thì xem xét, đánh giá như thế nào?",
        options: {
            A: "Thuộc hành vi bị cấm trong đấu thầu",
            B: "Không đáp ứng yêu cầu về bảo đảm cạnh tranh trong đấu thầu",
            C: "Hồ sơ dự thầu của một trong hai nhà thầu không được xem xét",
            D: "Không thuộc hành vi bị cấm, không vi phạm quy định về bảo đảm cạnh tranh trong đấu thầu"
        },
        correctAnswer: "D",
        explanation: "Điều 6 của Luật quy định về bảo đảm cạnh tranh, chủ yếu là sự độc lập giữa nhà thầu và chủ đầu tư/tư vấn. Việc hai nhà thầu có người đại diện là anh em ruột tham gia cùng một gói thầu không tự động cấu thành hành vi vi phạm. Chỉ khi có bằng chứng cho thấy họ có sự thông đồng, dàn xếp (hành vi thông thầu bị cấm tại khoản 3, Điều 16) thì mới bị xử lý. Bản thân mối quan hệ gia đình giữa các nhà thầu không phải là hành vi bị cấm."
    },
    {
        id: 60,
        question: "Việc đánh giá nhà thầu đang trong thời gian bị cấm tham dự thầu thuộc nội dung đánh giá về?",
        options: {
            A: "Kỹ thuật",
            B: "Tài chính",
            C: "Tư cách hợp lệ",
            D: "Năng lực, kinh nghiệm"
        },
        correctAnswer: "C",
        explanation: "Căn cứ điểm e, khoản 1, Điều 5, một trong các điều kiện để nhà thầu có tư cách hợp lệ là \"Không đang trong thời gian bị cấm tham dự thầu theo quyết định của người có thẩm quyền...\". Do đó, đây là nội dung được xem xét đầu tiên khi đánh giá về tư cách hợp lệ của nhà thầu."
    }
];
