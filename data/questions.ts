
import { Question } from '../types';

export const allQuestions: Question[] = [
    {
        id: 1,
        question: "Trường hợp nào sau đây bắt buộc phải lựa chọn nhà thầu theo quy định tại Luật Đấu thầu?",
        options: {
            A: "Gói thầu thuộc dự án sử dụng vốn ngân sách nhà nước của cơ quan nhà nước",
            B: "Lựa chọn nhà thầu của doanh nghiệp nhà nước không sử dụng vốn ngân sách nhà nước",
            C: "Lựa chọn nhà thầu của đơn vị sự nghiệp công lập tự bảo đảm chi thường xuyên không sử dụng ngân sách nhà nước",
            D: "Việc thuê, mua, thuê mua nhà, trụ sở, tài sản gắn liền với đất"
        },
        correctAnswer: "A",
        explanation: "Căn cứ theo khoản 1, Điều 2 của Luật Đấu thầu số 22/2023/QH15, hoạt động lựa chọn nhà thầu có sử dụng vốn ngân sách nhà nước để thực hiện dự án đầu tư, dự toán mua sắm của cơ quan nhà nước là đối tượng bắt buộc phải áp dụng Luật Đấu thầu. Các phương án còn lại đề cập đến việc lựa chọn nhà thầu của doanh nghiệp nhà nước không sử dụng vốn ngân sách nhà nước hoặc đơn vị sự nghiệp công lập tự chủ không sử dụng vốn ngân sách nhà nước, đây là những trường hợp được tự quyết định việc lựa chọn nhà thầu trên cơ sở đảm bảo công khai, minh bạch, hiệu quả kinh tế và trách nhiệm giải trình."
    },
    {
        id: 2,
        question: "Chọn phương án đúng về phạm vi điều chỉnh của Luật Đấu thầu?",
        options: {
            A: "Quy định về quản lý nhà nước đối với hoạt động đấu thầu",
            B: "Quy định về thẩm quyền và trách nhiệm của các cơ quan, tổ chức, cá nhân trong hoạt động đấu thầu",
            C: "Quy định về hoạt động lựa chọn nhà thầu thực hiện gói thầu, hoạt động lựa chọn nhà đầu tư thực hiện dự án đầu tư kinh doanh",
            D: "Tất cả phương án trên đều đúng"
        },
        correctAnswer: "D",
        explanation: "Điều 1 của Luật Đấu thầu số 22/2023/QH15 quy định phạm vi điều chỉnh của luật bao gồm: Quản lý nhà nước đối với hoạt động đấu thầu; Thẩm quyền và trách nhiệm của các cơ quan, tổ chức, cá nhân trong hoạt động đấu thầu; Hoạt động lựa chọn nhà thầu thực hiện gói thầu và hoạt động lựa chọn nhà đầu tư thực hiện dự án đầu tư kinh doanh. Do đó, cả ba phương án A, B và C đều nằm trong phạm vi điều chỉnh của Luật Đấu thầu."
    },
    // ... This file would contain all 200 questions. Due to length constraints, I will add a few more as examples.
    {
        id: 3,
        question: "Trường hợp nào sau đây không thuộc đối tượng áp dụng của Luật Đấu thầu?",
        options: {
            A: "Gói thầu mua thuốc, hoá chất, vật tư xét nghiệm sử dụng nguồn ngân sách nhà nước của bệnh viện công lập A",
            B: "Gói thầu xây dựng đường giao thông sử dụng vốn đầu tư công do Ban Quản lý dự án đầu tư xây dựng công trình tỉnh A làm chủ đầu tư",
            C: "Gói thầu mua sắm trang thiết bị làm việc sử dụng vốn nhà nước của Văn phòng UBND tỉnh A",
            D: "Hoạt động mua phần mềm kế toán của hộ kinh doanh cá thể"
        },
        correctAnswer: "D",
        explanation: "Theo Điều 2 của Luật Đấu thầu số 22/2023/QH15, các đối tượng áp dụng của luật này bao gồm các hoạt động lựa chọn nhà thầu sử dụng vốn nhà nước, vốn của doanh nghiệp nhà nước, và các dự án đầu tư kinh doanh có lựa chọn nhà đầu tư. Các gói thầu mua sắm của bệnh viện công lập (A), xây dựng công trình giao thông sử dụng vốn đầu tư công (B), và mua sắm trang thiết bị của văn phòng UBND (C) đều liên quan đến việc sử dụng vốn nhà nước và do đó thuộc đối tượng áp dụng của Luật Đấu thầu. Hoạt động mua sắm của hộ kinh doanh cá thể không thuộc các trường hợp quy định tại Điều 2."
    },
    {
        id: 4,
        question: "Theo quy định pháp luật về đấu thầu, gói thầu nào là gói thầu cung cấp dịch vụ tư vấn?",
        options: {
            A: "Thiết kế và cung cấp hệ thống xử lý nước thải",
            B: "Gói thầu lập nhiệm vụ quy hoạch vùng",
            C: "Gói thầu quảng cáo trên nền tảng xã hội và phát sóng trên VTV",
            D: "Gói thầu mua phần mềm kế toán MISA"
        },
        correctAnswer: "B",
        explanation: "Căn cứ khoản 4, Điều 4 của Luật Đấu thầu số 22/2023/QH15, dịch vụ tư vấn bao gồm các hoạt động như: lập, đánh giá báo cáo quy hoạch, tổng sơ đồ phát triển, kiến trúc; khảo sát, lập báo cáo nghiên cứu tiền khả thi, báo cáo nghiên cứu khả thi... Do đó, gói thầu 'lập nhiệm vụ quy hoạch vùng' là một gói thầu dịch vụ tư vấn. Các phương án còn lại như 'Thiết kế và cung cấp hệ thống xử lý nước thải' (có thể là gói thầu hỗn hợp), 'quảng cáo' (dịch vụ phi tư vấn), và 'mua phần mềm kế toán' (mua sắm hàng hóa) không hoàn toàn là dịch vụ tư vấn."
    },
    {
        id: 5,
        question: "Theo quy định pháp luật về đấu thầu, gói thầu nào là gói thầu cung cấp dịch vụ phi tư vấn?",
        options: {
            A: "Gói thầu in sổ công tác của tỉnh A",
            B: "Gói thầu thuê kiểm toán dự án",
            C: "Gói thầu mua phần mềm kế toán hỗ trợ doanh nghiệp khởi nghiệp sáng tạo, doanh nghiệp nhỏ do phụ nữ làm chủ",
            D: "Gói thầu xây dựng trụ sở làm việc của tỉnh A"
        },
        correctAnswer: "A",
        explanation: "Dịch vụ phi tư vấn, theo khoản 5, Điều 4 của Luật Đấu thầu số 22/2023/QH15, là các hoạt động không phải là dịch vụ tư vấn, ví dụ như logistics, bảo hiểm, quảng cáo, lắp đặt, tổ chức đào tạo, bảo trì, bảo dưỡng. Gói thầu 'in sổ công tác' là một hoạt động in ấn, thuộc nhóm dịch vụ phi tư vấn. Trong khi đó, 'thuê kiểm toán dự án' (B) là dịch vụ tư vấn. Gói thầu 'mua phần mềm kế toán' (C) là mua sắm hàng hóa. Gói thầu 'xây dựng trụ sở làm việc' (D) thuộc loại gói thầu xây lắp."
    },
    {
        id: 6,
        question: "Theo quy định pháp luật về đấu thầu, đấu thầu là gì?",
        options: {
            A: "Là quá trình lựa chọn nhà thầu để ký kết, thực hiện hợp đồng cung cấp dịch vụ tư vấn, dịch vụ phi tư vấn, mua sắm hàng hóa, xây lắp trên cơ sở bảo đảm cạnh tranh, công bằng, minh bạch, hiệu quả kinh tế và trách nhiệm giải trình",
            B: "Là quá trình lựa chọn nhà đầu tư để ký kết, thực hiện hợp đồng dự án đầu tư kinh doanh trên cơ sở bảo đảm cạnh tranh, công bằng, minh bạch, hiệu quả kinh tế và trách nhiệm giải trình",
            C: "Là quá trình lựa chọn đơn vị để thực hiện hợp đồng thông qua các quy trình, thủ tục do pháp luật đấu thầu quy định.",
            D: "Phương án A và B đều đúng"
        },
        correctAnswer: "D",
        explanation: "Căn cứ khoản 8, Điều 4 của Luật Đấu thầu số 22/2023/QH15, 'Đấu thầu là quá trình lựa chọn nhà thầu để ký kết, thực hiện hợp đồng cung cấp dịch vụ tư vấn, dịch vụ phi tư vấn, mua sắm hàng hóa, xây lắp... hoặc lựa chọn nhà đầu tư để ký kết, thực hiện hợp đồng dự án đầu tư kinh doanh...'. Do đó, khái niệm đấu thầu bao gồm cả quá trình lựa chọn nhà thầu (phương án A) và lựa chọn nhà đầu tư (phương án B)."
    },
    {
        id: 7,
        question: "Đấu thầu quốc tế là gì?",
        options: {
            A: "Là hoạt động đấu thầu mà nhà thầu trong nước, nước ngoài được tham dự thầu",
            B: "Là hoạt động đấu thầu mà nhà thầu trong nước, nước ngoài được tham dự thầu, trong đó nhà thầu trong nước bắt buộc phải liên danh với nhà thầu nước ngoài",
            C: "Là hoạt động đấu thầu chỉ nhà thầu quốc tế được phép tham dự thầu",
            D: "Là hoạt động đấu thầu chỉ nhà thầu trong nước được phép tham dự thầu"
        },
        correctAnswer: "A",
        explanation: "Căn cứ khoản 13, Điều 4 của Luật Đấu thầu số 22/2023/QH15, 'Đấu thầu quốc tế là hoạt động đấu thầu mà nhà thầu, nhà đầu tư trong nước, nước ngoài được tham dự thầu'. Phương án B, C, và D đưa ra các giới hạn không chính xác."
    },
    {
        id: 8,
        question: "Giá đề nghị trúng thầu là gì?",
        options: {
            A: "Là giá dự thầu của nhà thầu ghi trong quyết định phê duyệt kết quả lựa chọn nhà thầu.",
            B: "Là giá dự thầu của nhà thầu được đề nghị trúng thầu sau khi đã được sửa lỗi, hiệu chỉnh sai lệch theo yêu cầu của hồ sơ mời thầu, hồ sơ yêu cầu, trừ đi giá trị giảm giá (nếu có)",
            C: "Là giá dự thầu của nhà thầu chưa tính sửa lỗi, hiệu chỉnh sai lệch và giá trị giảm giá (nếu có)",
            D: "Là giá trị ghi trong hợp đồng giữa chủ đầu tư và nhà thầu"
        },
        correctAnswer: "B",
        explanation: "Căn cứ khoản 25, Điều 4 của Luật Đấu thầu số 22/2023/QH15, đây là định nghĩa chính xác về giá đề nghị trúng thầu. Đây là giá cuối cùng sau khi hiệu chỉnh để xem xét, so sánh và xếp hạng thầu."
    },
    {
        id: 9,
        question: "Theo quy định pháp luật về đấu thầu, hàng hóa gồm?",
        options: {
            A: "Máy móc, thiết bị, nguyên liệu, nhiên liệu, vật liệu, vật tư, phụ tùng; sản phẩm; phương tiện; hàng tiêu dùng, phần mềm thương mại",
            B: "Hóa chất, vật tư xét nghiệm, thiết bị y tế",
            C: "Phương án A và B đúng",
            D: "Logistics, bảo hiểm, quảng cáo, nghiệm thu chạy thử, chụp ảnh vệ tinh"
        },
        correctAnswer: "C",
        explanation: "Căn cứ khoản 27, Điều 4 của Luật Đấu thầu số 22/2023/QH15, hàng hóa bao gồm máy móc, thiết bị, nguyên liệu, nhiên liệu, vật liệu, vật tư, phụ tùng; sản phẩm; phương tiện; hàng tiêu dùng; thuốc, hóa chất, vật tư xét nghiệm, thiết bị y tế; phần mềm thương mại. Do đó, cả hai phương án A và B đều mô tả đúng các loại hàng hóa theo luật định."
    },
    {
        id: 10,
        question: "Đối tượng được hưởng ưu đãi trong lựa chọn nhà thầu là gì?",
        options: {
            A: "Nhà thầu trong nước sản xuất hàng hóa có xuất xứ Việt Nam phù hợp với hồ sơ mời thầu",
            B: "Nhà thầu trong nước tham dự thầu với tư cách độc lập hoặc liên danh",
            C: "Sản phẩm, dịch vụ thân thiện môi trường theo quy định của pháp luật về bảo vệ môi trường",
            D: "Tất cả các phương án trên đều đúng"
        },
        correctAnswer: "D",
        explanation: "Căn cứ Điều 10 của Luật Đấu thầu số 22/2023/QH15, các đối tượng được hưởng ưu đãi bao gồm: hàng hóa có xuất xứ Việt Nam (phương án A); nhà thầu trong nước tham dự thầu với tư cách độc lập hoặc liên danh (phương án B); sản phẩm, dịch vụ thân thiện môi trường (phương án C); và các đối tượng khác. Do đó, tất cả các phương án đều đúng."
    }
];
