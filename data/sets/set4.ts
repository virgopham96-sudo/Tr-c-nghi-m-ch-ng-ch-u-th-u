import { Question } from '../../types';

export const set4: Question[] = [
    {
        id: 31,
        question: "Gói thầu lựa chọn tư vấn là tổ chức có giá gói thầu là 500 triệu đồng áp dụng hình thức lựa chọn nhà thầu nào?",
        options: {
            A: "Chỉ được áp dụng hình thức chỉ định thầu",
            B: "Được áp dụng hình thức chỉ định thầu hoặc đấu thầu rộng rãi",
            C: "Áp dụng hình thức chào hàng cạnh tranh",
            D: "Được áp dụng hình thức chỉ định thầu hoặc đấu thầu rộng rãi hoặc chào hàng cạnh tranh"
        },
        correctAnswer: "D",
        explanation: "Gói thầu này có giá trị nằm trong hạn mức chỉ định thầu theo quy định của Chính phủ (căn cứ điểm e, khoản 1, Điều 23). Tuy nhiên, chủ đầu tư vẫn có quyền lựa chọn đấu thầu rộng rãi (Điều 21) hoặc chào hàng cạnh tranh (nếu là dịch vụ phi tư vấn thông dụng, đơn giản - Điều 24) để tăng tính cạnh tranh. Do đó, có thể áp dụng một trong các hình thức này."
    },
    {
        id: 32,
        question: "Chọn phương án đúng về hạn mức đối với đấu thầu rộng rãi?",
        options: {
            A: "Không quy định hạn mức áp dụng",
            B: "Trên 20 tỷ đồng",
            C: "Trên 10 tỷ đồng",
            D: "Trên 20 tỷ đồng đối với xây lắp, hàng hoá, trên 10 tỷ đồng đối với gói thầu dịch vụ tư vấn, phi tư vấn"
        },
        correctAnswer: "A",
        explanation: "Căn cứ khoản 1, Điều 21, \"Đấu thầu rộng rãi là hình thức lựa chọn nhà thầu trong đó không hạn chế số lượng nhà thầu tham dự.\" Hình thức này không bị giới hạn bởi giá trị của gói thầu."
    },
    {
        id: 33,
        question: "Chọn phương án đúng về loại gói thầu đối với hình thức mua sắm trực tiếp?",
        options: {
            A: "Chỉ gói thầu hàng hoá",
            B: "Chỉ gói thầu xây lắp",
            C: "Chỉ gói thầu phi tư vấn",
            D: "Gói thầu hàng hóa và phi tư vấn"
        },
        correctAnswer: "A",
        explanation: "Căn cứ khoản 1, Điều 25, \"Mua sắm trực tiếp được áp dụng đối với gói thầu mua sắm hàng hóa tương tự thuộc dự án, dự toán mua sắm của cùng một chủ đầu tư hoặc chủ đầu tư khác...\". Luật chỉ quy định áp dụng hình thức này cho gói thầu mua sắm hàng hóa."
    },
    {
        id: 34,
        question: "Đâu không phải là điều kiện để áp dụng mua sắm trực tiếp?",
        options: {
            A: "Nhà thầu đã trúng thầu thông qua đấu thầu rộng rãi, đấu thầu hạn chế và đã ký hợp đồng gói thầu thực hiện gói thầu trước đó",
            B: "Thời gian từ khi ký hợp đồng gói thầu trước đến ngày phê duyệt kết quả mua sắm trực tiếp không quá 12 tháng",
            C: "Đơn giá các phần việc thuộc gói thầu mua sắm trực tiếp không vượt đơn giá phần việc tương ứng của gói thầu đã ký trước đó thuộc gói thầu tương tự đã ký hợp đồng trước đó, đồng thời, phù hợp với giá thị trường tại thời điểm hoàn thiện hợp đồng",
            D: "Chủ đầu tư được áp dụng mua sắm trực tiếp nhiều lần đối với các loại hàng hóa thuộc gói thầu"
        },
        correctAnswer: "D",
        explanation: "Căn cứ điểm b, khoản 2, Điều 25, quy định rõ: \"Chủ đầu tư chỉ được áp dụng mua sắm trực tiếp một lần đối với các loại hàng hóa thuộc gói thầu...\". Do đó, việc áp dụng nhiều lần là không đúng điều kiện. Các phương án A, B, C đều là các điều kiện được quy định tại khoản 2, Điều 25."
    },
    {
        id: 35,
        question: "Hãy chọn phương án đúng về hình thức đặt hàng?",
        options: {
            A: "Là một trong các hình thức lựa chọn nhà thầu",
            B: "Pháp luật quản lý ngành, lĩnh vực quy định về quy trình, thủ tục đặt hàng khác với quy trình, thủ tục của pháp luật về đấu thầu thì áp dụng quy định của pháp luật về đấu thầu.",
            C: "Đặt hàng chỉ được áp dụng cho sản phẩm, dịch vụ công",
            D: "Đặt hàng chỉ áp dụng đối với nguồn chi thường xuyên ngân sách nhà nước, không được áp dụng đối với nguồn vốn khác"
        },
        correctAnswer: "C",
        explanation: "Căn cứ Điều 29a, \"Đặt hàng là hình thức giao trực tiếp cho tổ chức, doanh nghiệp, cá nhân thực hiện cung cấp hàng hóa, dịch vụ thuộc các trường hợp sau đây: a) Sản phẩm, dịch vụ công ích, dịch vụ sự nghiệp công;...\". Phương án A không đầy đủ, B sai vì nếu pháp luật chuyên ngành quy định khác thì ưu tiên áp dụng luật chuyên ngành. Phương án D sai vì đặt hàng có thể áp dụng cho nhiều nguồn vốn khác nhau, không chỉ chi thường xuyên."
    },
    {
        id: 36,
        question: "Kế hoạch lựa chọn nhà thầu của dự án thuộc đối tượng áp dụng của Luật Đấu thầu bắt buộc phải đăng tải ở đâu?",
        options: {
            A: "Hệ thống mạng đấu thầu quốc gia",
            B: "Báo Tài chính-Đầu tư",
            C: "Cổng Thông tin điện tử của Bộ, ngành",
            D: "Phương án A và B đều đúng"
        },
        correctAnswer: "A",
        explanation: "Căn cứ điểm a, khoản 1, Điều 7 và khoản 3, Điều 7, thông tin về kế hoạch lựa chọn nhà thầu là một trong các thông tin phải được đăng tải trên Hệ thống mạng đấu thầu quốc gia."
    },
    {
        id: 37,
        question: "Chậm nhất là bao nhiêu ngày thì kế hoạch lựa chọn nhà thầu phải được đăng tải trên Hệ thống mạng đấu thầu quốc gia?",
        options: {
            A: "05 ngày làm việc kể từ ngày kế hoạch lựa chọn nhà thầu được ban hành",
            B: "07 ngày kể từ ngày kế hoạch lựa chọn nhà thầu được ban hành",
            C: "07 ngày làm việc kể từ ngày kế hoạch lựa chọn nhà thầu được ban hành",
            D: "10 ngày kể từ ngày kế hoạch lựa chọn nhà thầu được ban hành"
        },
        correctAnswer: "A",
        explanation: "Căn cứ khoản 4, Điều 8, \"Thông tin quy định tại các điểm a, d, g, h, i khoản 1... của Luật này phải được đăng tải trên Hệ thống mạng đấu thầu quốc gia chậm nhất là 05 ngày làm việc kể từ ngày văn bản được ban hành...\". Thông tin về kế hoạch lựa chọn nhà thầu thuộc điểm a, khoản 1, Điều 7."
    },
    {
        id: 38,
        question: "Kế hoạch lựa chọn nhà thầu bao gồm nội dung nào sau đây?",
        options: {
            A: "Giá gói thầu",
            B: "Thời gian thực hiện hợp đồng",
            C: "Giám sát hoạt động đấu thầu",
            D: "Cả 3 phương án trên đều đúng"
        },
        correctAnswer: "A",
        explanation: "Căn cứ Điều 39, Nội dung kế hoạch lựa chọn nhà thầu bao gồm: Tên gói thầu, Giá gói thầu, Nguồn vốn, Hình thức và phương thức lựa chọn nhà thầu, Thời gian tổ chức lựa chọn nhà thầu, Loại hợp đồng, và Thời gian thực hiện gói thầu. Do đó, \"Giá gói thầu\" là một nội dung bắt buộc. \"Thời gian thực hiện hợp đồng\" (B) cũng đúng nhưng câu hỏi chỉ yêu cầu chọn một. \"Giám sát hoạt động đấu thầu\" (C) là một hoạt động trong quản lý đấu thầu, không phải nội dung của kế hoạch lựa chọn nhà thầu."
    },
    {
        id: 39,
        question: "Đối với nội dung mua sắm có giá không quá 50 triệu đồng thì được thực hiện như thế nào?",
        options: {
            A: "Không phải lập kế hoạch lựa chọn nhà thầu nhưng phải thực hiện mua sắm trên cơ sở tiết kiệm, hiệu quả, bảo đảm đầy đủ hoá đơn, chứng từ",
            B: "Không phải lập kế hoạch lựa chọn nhà thầu nhưng phải thực hiện mua sắm theo giá công khai, giá niêm yết và không cần hoá đơn, chứng từ",
            C: "Được hình thành gói thầu để thực hiện lựa chọn nhà thầu theo một trong hình thức lựa chọn nhà thầu (đấu thầu rộng rãi, chào hàng cạnh tranh, chỉ định thầu....) nhưng phải lập kế hoạch lựa chọn nhà thầu",
            D: "Phương án A và C đúng"
        },
        correctAnswer: "A",
        explanation: "Đây là trường hợp mua sắm giá trị nhỏ. Theo quy định chung về quản lý ngân sách và mua sắm công, đối với các khoản mua sắm dưới một hạn mức nhất định (thường được quy định trong các văn bản dưới luật), thủ trưởng đơn vị được tự quyết định và chịu trách nhiệm, không cần lập kế hoạch lựa chọn nhà thầu theo quy trình đầy đủ của Luật Đấu thầu nhưng phải đảm bảo nguyên tắc hiệu quả và có đầy đủ chứng từ tài chính."
    },
    {
        id: 40,
        question: "Bảo đảm cạnh tranh trong đấu thầu thuộc nội dung đánh giá về?",
        options: {
            A: "Tư cách hợp lệ",
            B: "Năng lực, kinh nghiệm",
            C: "Kỹ thuật",
            D: "Tài chính"
        },
        correctAnswer: "A",
        explanation: "Căn cứ điểm đ, khoản 1, Điều 5, một trong các điều kiện về tư cách hợp lệ của nhà thầu là \"Bảo đảm cạnh tranh trong đấu thầu theo quy định tại Điều 6 của Luật này\"."
    }
];
