import { Question } from '../../types';

export const set8: Question[] = [
    {
        id: 71,
        question: "Đối với gói thầu mua sắm hàng hóa tổ chức đấu thầu rộng rãi qua mạng, kinh nghiệm thực hiện hợp đồng cung cấp hàng hóa tương tự được xét trên cơ sở nào sau đây?",
        options: {
            A: "Hàng hóa có cùng chủng loại với gói thầu đang xét",
            B: "Hàng hóa thuộc cùng lĩnh vực tổng quát với hàng hóa của gói thầu",
            C: "Hàng hóa có 4 số đầu tiên mã HS cùng với mã HS của hàng hóa thuộc gói thầu",
            D: "Cả 2 phương án B và C đều đúng"
        },
        correctAnswer: "C",
        explanation: "Mã HS (Hệ thống hài hòa mô tả và mã hóa hàng hóa) là một hệ thống phân loại hàng hóa được chuẩn hóa quốc tế. Việc so sánh các số đầu tiên của mã HS là một phương pháp khách quan, chính xác để xác định tính tương tự của hàng hóa. Thông thường, 4 đến 6 số đầu tiên của mã HS cho biết nhóm hàng và chủng loại hàng hóa. Đây là tiêu chí kỹ thuật được áp dụng phổ biến trong đấu thầu qua mạng để tự động hóa việc đánh giá."
    },
    {
        id: 72,
        question: "Gói thầu dịch vụ phi tư vấn chia thành nhiều phần thì việc đánh giá về doanh thu đối với nhà thầu tham dự nhiều phần được thực hiện như thế nào?",
        options: {
            A: "Việc đánh giá về doanh thu căn cứ trên tổng giá trị doanh thu bình quân yêu cầu đối với các phần mà nhà thầu tham dự",
            B: "Việc đánh giá về doanh thu căn cứ trên từng phần mà nhà thầu tham dự, nhà thầu không phải đáp ứng tổng doanh thu đối với các phần mà nhà thầu tham dự",
            C: "Việc đánh giá về doanh thu căn cứ trên phần có giá trị lớn nhất trong tổng số các phần nhà thầu tham dự",
            D: "Các phương án trên đều sai"
        },
        correctAnswer: "A",
        explanation: "Khi một nhà thầu tham dự nhiều phần, năng lực tài chính của nhà thầu phải được chứng minh là đủ để thực hiện đồng thời tất cả các phần đó nếu trúng thầu. Do đó, yêu cầu về doanh thu phải được tính bằng tổng yêu cầu doanh thu của tất cả các phần mà nhà thầu tham dự."
    },
    {
        id: 73,
        question: "Gói thầu mua sắm hàng hóa chia thành nhiều phần thì việc đánh giá về quy mô hợp đồng tương tự đối với nhà thầu tham dự nhiều phần được thực hiện như thế nào?",
        options: {
            A: "Việc đánh giá về quy mô hợp đồng tương tự căn cứ trên tổng quy mô hợp đồng tương tự đối với các phần mà nhà thầu tham dự",
            B: "Việc đánh giá về quy mô hợp đồng tương tự tương ứng với từng phần mà nhà thầu tham dự, nhà thầu không phải đáp ứng tổng quy mô hợp đồng tương tự đối với các phần mà nhà thầu tham dự",
            C: "Việc đánh giá về quy mô hợp đồng tương tự căn cứ trên phần có giá trị nhỏ nhất trong tổng số các phần mà nhà thầu tham dự",
            D: "Các phương án trên đều sai"
        },
        correctAnswer: "B",
        explanation: "Khác với năng lực tài chính (doanh thu), kinh nghiệm thực hiện hợp đồng tương tự thường được đánh giá riêng cho từng phần. Nhà thầu chỉ cần chứng minh có kinh nghiệm thực hiện hợp đồng tương tự với phần có yêu cầu cao nhất (hoặc theo quy định cụ thể của HSMT), không cần phải cộng dồn giá trị các hợp đồng tương tự cho tất cả các phần."
    },
    {
        id: 74,
        question: "Trường hợp E-HSMT của gói thầu mua sắm hàng hóa có yêu cầu về cam kết, hợp đồng nguyên tắc bảo hành, bảo trì, duy tu, bảo dưỡng mà E-HSDT của nhà thầu không đính kèm các tài liệu này thì Chủ đầu tư xử lý như thế nào?",
        options: {
            A: "Hồ sơ dự thầu của nhà thầu bị loại, không được xem xét, đánh giá",
            B: "Chủ đầu tư yêu cầu nhà thầu làm rõ, bổ sung tài liệu trong một khoảng thời gian phù hợp nhưng không ít hơn 03 ngày làm việc để làm cơ sở đánh giá E-HSDT",
            C: "Xin ý kiến người có thẩm quyền để xử lý tình huống trong đấu thầu trên cơ sở bảo đảm các mục tiêu của công tác đấu thầu",
            D: "Tiếp tục đánh giá E-HSDT, trường hợp nhà thầu trúng thầu thì yêu cầu nhà thầu bổ sung, làm rõ tài liệu"
        },
        correctAnswer: "B",
        explanation: "Đây là trường hợp thiếu sót các tài liệu không cơ bản trong hồ sơ dự thầu. Theo nguyên tắc xử lý tình huống và làm rõ hồ sơ dự thầu, nếu việc thiếu sót không làm thay đổi bản chất của hồ sơ dự thầu (như giá chào, các nội dung kỹ thuật chính), bên mời thầu được phép yêu cầu nhà thầu làm rõ, bổ sung để hoàn thiện hồ sơ. Việc loại ngay nhà thầu (phương án A) là quá cứng nhắc và có thể làm giảm cạnh tranh."
    },
    {
        id: 75,
        question: "Đối với gói thầu mua sắm hàng hóa áp dụng đấu thầu rộng rãi, trong hồ sơ dự thầu nhà thầu không đề xuất cụ thể ký mã hiệu, nhãn hiệu, xuất xứ, hãng sản xuất thì xử lý như thế nào?",
        options: {
            A: "Chủ đầu tư yêu cầu nhà thầu làm rõ các thông tin này để làm cơ sở đánh giá trên cơ sở không được thay đổi giá dự thầu",
            B: "Tổ chuyên gia căn cứ theo cataloge, đề xuất kỹ thuật kèm theo để làm cơ sở đánh giá",
            C: "Hồ sơ dự thầu của nhà thầu không được xem xét, đánh giá",
            D: "Tiếp tục đánh giá hồ sơ dự thầu, trường hợp nhà thầu trúng thầu thì yêu cầu nhà thầu bổ sung, làm rõ các thông tin này"
        },
        correctAnswer: "D",
        explanation: "Theo quy định, hàng hóa nhà thầu chào phải đáp ứng các thông số kỹ thuật trong hồ sơ mời thầu. Việc không ghi rõ nhãn hiệu, xuất xứ không phải là lý do để loại hồ sơ dự thầu ngay lập tức, miễn là các tài liệu kỹ thuật kèm theo (catalogue, thông số kỹ thuật...) chứng minh được hàng hóa đáp ứng yêu cầu. Đây là nội dung có thể yêu cầu nhà thầu làm rõ trong quá trình đánh giá hoặc trước khi ký hợp đồng."
    },
    {
        id: 76,
        question: "Hồ sơ mời thầu của gói thầu xây lắp có quy định cho phép sử dụng nhà thầu phụ, trường hợp nhà thầu đề xuất sử dụng thầu phụ thì việc đánh giá năng lực kinh nghiệm của nhà thầu phụ được thực hiện như thế nào?",
        options: {
            A: "Đánh giá năng lực, kinh nghiệm của nhà thầu phụ căn cứ theo phần công việc nhà thầu phụ đảm nhận, nhà thầu tham dự thầu không phải đáp ứng về năng lực, kinh nghiệm đối với phần công việc mà nhà thầu phụ đảm nhận",
            B: "Không đánh giá năng lực, kinh nghiệm của nhà thầu phụ, nhà thầu tham dự thầu vẫn phải đáp ứng về năng lực, kinh nghiệm đối với phần công việc mà nhà thầu phụ đảm nhận",
            C: "Do chủ đầu tư quyết định có đánh giá hoặc không đánh giá năng lực, kinh nghiệm nhà thầu phụ",
            D: "Đánh giá năng lực, kinh nghiệm của nhà thầu phụ căn cứ theo phần công việc nhà thầu phụ đảm nhận, nhà thầu tham dự thầu cũng phải đáp ứng về năng lực, kinh nghiệm đối với phần công việc mà nhà thầu phụ đảm nhận"
        },
        correctAnswer: "A",
        explanation: "Nhà thầu chính (nhà thầu tham dự thầu) chịu trách nhiệm toàn bộ về chất lượng, tiến độ của gói thầu trước chủ đầu tư. Khi nhà thầu chính sử dụng nhà thầu phụ, nhà thầu chính phải chứng minh nhà thầu phụ đó có đủ năng lực, kinh nghiệm để thực hiện phần công việc được giao. Đồng thời, năng lực, kinh nghiệm của nhà thầu chính sẽ được đánh giá cho phần công việc mà nhà thầu chính thực hiện. Tổng hợp lại, năng lực và kinh nghiệm của liên hợp (nhà thầu chính + nhà thầu phụ) phải đáp ứng yêu cầu của gói thầu. Do đó, phương án A là hợp lý nhất."
    },
    {
        id: 77,
        question: "Khi tham dự thầu đấu thầu qua mạng, nhà thầu có được ủy quyền cho Giám đốc chi nhánh tham dự thầu hay không?",
        options: {
            A: "Được ủy quyền bằng giấy ủy quyền",
            B: "Không được ủy quyền",
            C: "Được ủy quyền không cần giấy ủy quyền nhưng nhà thầu phải tạo tài khoản nghiệp vụ cho giám đốc chi nhánh",
            D: "Các phương án trên đều sai"
        },
        correctAnswer: "A",
        explanation: "Pháp luật doanh nghiệp và pháp luật dân sự cho phép người đại diện theo pháp luật của doanh nghiệp (ví dụ: Giám đốc/Tổng Giám đốc) được ủy quyền cho người khác (ví dụ: Giám đốc chi nhánh) thực hiện các giao dịch nhân danh công ty. Việc tham dự thầu là một giao dịch như vậy. Miễn là có giấy ủy quyền hợp lệ, được lập theo đúng quy định của pháp luật, thì Giám đốc chi nhánh hoàn toàn có thể đại diện cho công ty tham dự thầu."
    },
    {
        id: 78,
        question: "Hợp đồng theo theo tỷ lệ phần trăm có thể được áp dụng đối với gói thầu nào sau đây?",
        options: {
            A: "Mua sắm thiết bị y tế",
            B: "Xây dựng công trình",
            C: "Bảo hiểm công trình mà giá trị hợp đồng được xác định chính xác trên cơ sở giá trị công trình thực tế được nghiệm thu",
            D: "Tư vấn giám sát"
        },
        correctAnswer: "C",
        explanation: "Căn cứ khoản 7, Điều 64, \"Hợp đồng theo tỷ lệ phần trăm chỉ có thể áp dụng cho gói thầu bảo hiểm công trình mà giá trị hợp đồng được xác định chính xác trên cơ sở giá trị công trình thực tế được nghiệm thu.\" Đây là quy định trực tiếp và rõ ràng trong Luật."
    },
    {
        id: 79,
        question: "Cơ sở để thanh toán hợp đồng cho nhà thầu là gì?",
        options: {
            A: "Giá hợp đồng và các điều khoản cụ thể về thanh toán được ghi trong hợp đồng",
            B: "Dự toán gói thầu và các điều khoản cụ thể về thanh toán được ghi trong hợp đồng",
            C: "Dự toán gói thầu",
            D: "Phương án A và C đều sai"
        },
        correctAnswer: "A",
        explanation: "Hợp đồng là thỏa thuận pháp lý cao nhất giữa các bên. Mọi việc thanh toán phải được thực hiện theo đúng các điều khoản đã cam kết trong hợp đồng (giá trị, giai đoạn thanh toán, hồ sơ thanh toán...). Dự toán gói thầu chỉ là cơ sở để lập kế hoạch và xét thầu, không phải là căn cứ trực tiếp để thanh toán cho nhà thầu sau khi đã ký hợp đồng."
    },
    {
        id: 80,
        question: "Nhà thầu không được hoàn trả bảo đảm thực hiện hợp đồng trong trường hợp nào?",
        options: {
            A: "Từ chối thực hiện hợp đồng khi hợp đồng đã có hiệu lực",
            B: "Thực hiện hợp đồng chậm tiến độ nhưng vẫn hoàn thành hợp đồng",
            C: "Nhà thầu đề nghị điều chỉnh tiến độ do bất khả kháng",
            D: "Nhà thầu đề xuất thay đổi nhà thầu phụ"
        },
        correctAnswer: "A",
        explanation: "Căn cứ điểm a, khoản 6, Điều 68, nhà thầu không được hoàn trả bảo đảm thực hiện hợp đồng trong trường hợp \"Từ chối thực hiện hợp đồng khi hợp đồng đã có hiệu lực\". Bảo đảm thực hiện hợp đồng có mục đích để ràng buộc trách nhiệm của nhà thầu trong việc thực thi hợp đồng đã ký."
    }
];
