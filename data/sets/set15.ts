import { Question } from '../../types';

export const set15: Question[] = [
    {
        id: 141,
        question: "Trường hợp gói thầu có tính chất đặc thù và áp dụng hình thức chỉ định thầu hoặc lựa chọn nhà thầu trong trường hợp đặc biệt, nhà thầu nước ngoài có yêu cầu ràng buộc chỉ ký hợp đồng khi không phải đăng ký trên Hệ thống mạng đấu thầu quốc gia thì chủ đầu tư xử lý như thế nào?",
        options: {
            A: "Không cần yêu cầu nhà thầu nước ngoài đăng ký khi đăng tải kết quả lựa chọn nhà thầu",
            B: "Yêu cầu nhà thầu nước ngoài đăng ký khi đăng tải kết quả lựa chọn nhà thầu",
            C: "Nhà thầu không được chấp nhận và bị loại",
            D: "Hủy thầu"
        },
        correctAnswer: "B",
        explanation: "Căn cứ điểm d, khoản 1, Điều 5, một trong các điều kiện về tư cách hợp lệ của nhà thầu là \"Có tên trên Hệ thống mạng đấu thầu quốc gia trước khi phê duyệt kết quả lựa chọn nhà thầu, nhà đầu tư\". Đây là quy định bắt buộc của pháp luật Việt Nam. Do đó, chủ đầu tư phải yêu cầu nhà thầu nước ngoài tuân thủ quy định này. Việc đăng ký có thể được thực hiện trước thời điểm phê duyệt kết quả."
    },
    {
        id: 142,
        question: "Đối với trường hợp hủy thầu thì phải thực hiện giải pháp nào sau đây?",
        options: {
            A: "Phải điều chỉnh thời gian bắt đầu tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu",
            B: "Phải điều chỉnh thời gian thực hiện gói thầu trong kế hoạch lựa chọn nhà thầu",
            C: "Không phải điều chỉnh thời gian bắt đầu tổ chức lựa chọn nhà thầu trong kế hoạch lựa chọn nhà thầu",
            D: "Tất cả các đáp án trên đều không đúng"
        },
        correctAnswer: "A",
        explanation: "Khi một cuộc thầu bị hủy, kế hoạch lựa chọn nhà thầu đã được duyệt cho cuộc thầu đó không còn phù hợp. Để có thể tổ chức đấu thầu lại, chủ đầu tư cần phải điều chỉnh lại kế hoạch lựa chọn nhà thầu, trong đó cập nhật lại \"thời gian bắt đầu tổ chức lựa chọn nhà thầu\" cho phù hợp với thực tế."
    },
    {
        id: 143,
        question: "Hủy thầu được thực hiện trong thời gian nào?",
        options: {
            A: "Từ ngày có thời điểm đóng thầu đến khi có kết quả lựa chọn nhà thầu",
            B: "Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu đến trước khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
            C: "Từ ngày có thời điểm đóng thầu đến khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung",
            D: "Từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu kể cả sau khi đã ký hợp đồng"
        },
        correctAnswer: "B",
        explanation: "Căn cứ khoản 3, Điều 17, \"Hủy thầu được thực hiện trong thời gian từ ngày phát hành hồ sơ mời sơ tuyển, hồ sơ mời quan tâm, hồ sơ mời thầu, hồ sơ yêu cầu đến trước khi ký kết hợp đồng, thỏa thuận khung đối với mua sắm tập trung.\" Đây là định nghĩa chính xác về khoảng thời gian có thể áp dụng biện pháp hủy thầu."
    },
    {
        id: 144,
        question: "Đối với gói thầu tổ chức lựa chọn nhà thầu qua mạng, trường hợp trong quá trình đánh giá E-HSDT mà chưa có kết kết quả lựa chọn nhà thầu, nhà thầu có tên trong biên bản mở thầu bị khóa tài khoản theo quy định của pháp luật về đấu thầu thì chủ đầu tư xử lý như thế nào?",
        options: {
            A: "Yêu cầu nhà thầu thực hiện các thủ tục để mở khóa tài khoản làm cơ sở xem xét, đánh giá E-HSDT của nhà thầu",
            B: "Tiếp tục xem xét, đánh giá E-HSDT của nhà thầu",
            C: "Không tiếp tục xem xét, đánh giá E-HSDT của nhà thầu",
            D: "Tiếp tục xem xét, đánh giá E-HSDT của nhà thầu và yêu cầu nhà thầu thực hiện các thủ tục để mở khóa tài khoản trước khi phê duyệt kết quả lựa chọn nhà thầu"
        },
        correctAnswer: "C",
        explanation: "Việc bị khóa tài khoản trên Hệ thống mạng đấu thầu quốc gia là một chế tài xử phạt, cho thấy nhà thầu đã có vi phạm trước đó. Tình trạng này khiến nhà thầu không còn đáp ứng đủ tư cách hợp lệ để tiếp tục tham gia quá trình lựa chọn nhà thầu. Do đó, E-HSDT của nhà thầu này sẽ bị loại và không được xem xét, đánh giá nữa."
    },
    {
        id: 145,
        question: "Đối với gói thầu xây lắp, dịch vụ phi tư vấn, dịch vụ tư vấn áp dụng đấu thầu trước quy định tại Điều 42 của Luật Đấu thầu, trường hợp dự án được phê duyệt có các nội dung dẫn đến tăng giá gói thầu (hoặc tăng dự toán nếu dự toán được phê duyệt sau khi phê duyệt kế hoạch lựa chọn nhà thầu) từ 30% trở lên hoặc thay đổi tiêu chuẩn đánh giá quan trọng về kỹ thuật hoặc thay đổi cấp công trình quy định trong hồ sơ mời thầu đã phát hành thì chủ đầu tư xử lý như thế nào?",
        options: {
            A: "Tiếp tục đánh giá hồ sơ dự thầu trong trường hợp đã mở thầu",
            B: "Được sửa đổi và phát hành bổ sung hồ sơ mời thầu trong trường hợp chưa mở thầu",
            C: "Được sửa đổi, bổ sung khối lượng công việc, hoàn thiện để ký kết hợp đồng với nhà thầu",
            D: "Hủy thầu"
        },
        correctAnswer: "D",
        explanation: "Đây là trường hợp có sự thay đổi lớn về \"mục tiêu, phạm vi đầu tư\" sau khi đã phát hành hồ sơ mời thầu. Căn cứ điểm b, khoản 1, Điều 17, đây là một trong các trường hợp phải hủy thầu. Việc tăng giá gói thầu quá lớn hoặc thay đổi tiêu chuẩn đánh giá quan trọng làm cho hồ sơ mời thầu đã phát hành không còn phù hợp, nếu tiếp tục sẽ không đảm bảo cạnh tranh và công bằng."
    },
    {
        id: 146,
        question: "Trường hợp nhà thầu trúng thầu không tiến hành hoàn thiện, ký kết hợp đồng hoặc tại thời điểm ký kết hợp đồng, nhà thầu trúng thầu không đáp ứng yêu cầu về năng lực kỹ thuật, tài chính quy định tại khoản 2 Điều 66 của Luật Đấu thầu thì chủ đầu tư xử lý như thế nào trong trường hợp này?",
        options: {
            A: "Hủy quyết định phê duyệt kết quả lựa chọn nhà thầu trúng thầu",
            B: "Hủy thầu",
            C: "Không công nhận kết quả lựa chọn nhà thầu",
            D: "Đình chỉ cuộc thầu"
        },
        correctAnswer: "A",
        explanation: "Khi nhà thầu trúng thầu vi phạm các nghĩa vụ tiếp theo sau khi có kết quả (như không hoàn thiện, không ký hợp đồng, không đáp ứng năng lực tại thời điểm ký kết), họ đã vi phạm quy định của luật đấu thầu. Chủ đầu tư sẽ hủy bỏ quyết định phê duyệt kết quả lựa chọn nhà thầu đối với nhà thầu đó và xem xét lựa chọn nhà thầu xếp hạng tiếp theo. Đồng thời, nhà thầu vi phạm sẽ không được hoàn trả bảo đảm dự thầu."
    },
    {
        id: 147,
        question: "Trường hợp nào dưới đây, chủ đầu tư và nhà thầu liên danh được thỏa thuận điều chỉnh phạm vi công việc giữa các thành viên liên danh?",
        options: {
            A: "Khi một thành viên liên danh không muốn tiếp tục thực hiện phần việc đã cam kết",
            B: "Khi chủ đầu tư thấy một thành viên trong liên danh thực hiện tốt nên muốn điều chuyển toàn bộ phần việc cho thành viên liên danh đó",
            C: "Khi cần đẩy nhanh tiến độ thực hiện hợp đồng hoặc do điều kiện khách quan không phải lỗi của nhà thầu làm ảnh hưởng tiến độ",
            D: "Khi một thành viên liên danh đề nghị chuyển nhượng phần việc để tiết kiệm chi phí"
        },
        correctAnswer: "C",
        explanation: "Việc điều chỉnh phạm vi công việc giữa các thành viên liên danh được phép thực hiện khi có lý do chính đáng, phục vụ mục tiêu chung của hợp đồng. Việc đẩy nhanh tiến độ là có lợi cho chủ đầu tư. Việc phát sinh điều kiện khách quan cản trở tiến độ cũng là lý do hợp lý để các bên tái phân công công việc nhằm khắc phục. Các phương án A, B, D đều xuất phát từ ý chí chủ quan hoặc lợi ích riêng của một thành viên, không phải là lý do chính đáng để điều chỉnh hợp đồng."
    },
    {
        id: 148,
        question: "Gói thầu EC có giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch, trừ đi giá trị giảm giá bằng 85% giá gói thầu thì chủ đầu tư có thể quy định giá trị bảo đảm thực hiện hợp đồng ở mức 15% hay không?",
        options: {
            A: "Không được quy định",
            B: "Có thể quy định nhưng phải được sự đồng ý của nhà thầu",
            C: "Do chủ đầu tư quyết định để ngừa rủi ro cho quá trình thực hiện",
            D: "Có thể quy định nhưng phải được người có thẩm quyền chấp thuận"
        },
        correctAnswer: "D",
        explanation: "Mức bảo đảm thực hiện hợp đồng thông thường là từ 2% đến 10% giá hợp đồng (khoản 4, Điều 68). Tuy nhiên, trong trường hợp giá trúng thầu thấp bất thường (thấp hơn đáng kể so với giá gói thầu), để phòng ngừa rủi ro nhà thầu bỏ thầu, pháp luật cho phép áp dụng mức bảo đảm cao hơn, có thể lên tới 30%. Việc áp dụng mức 15% (cao hơn 10%) là một tình huống đặc biệt, cần được người có thẩm quyền xem xét và chấp thuận để đảm bảo tính hợp lý và không lạm dụng."
    },
    {
        id: 149,
        question: "Đối với gói thầu hỗn hợp, có yêu cầu đặc thù về kỹ thuật chỉ có một số nhà thầu đáp ứng yêu cầu của gói thầu áp dụng bước thương thảo hợp đồng, trường hợp nhà thầu xếp hạng thứ nhất (danh sách xếp hạng có 03 nhà thầu) không tiến hành thương thảo, không ký biên bản thương thảo, thương thảo không thành công thì chủ đầu tư thực hiện bước tiếp theo như thế nào?",
        options: {
            A: "Mời nhà thầu xếp hạng tiếp theo vào thương thảo hợp đồng",
            B: "Hủy thầu",
            C: "Cho phép các nhà thầu còn lại chào lại giá dự thầu",
            D: "Mời nhà thầu xếp hạng tiếp theo vào hoàn thiện hợp đồng"
        },
        correctAnswer: "A",
        explanation: "Đây là quy trình xử lý thông thường khi nhà thầu xếp hạng nhất từ chối thực hiện các bước tiếp theo. Khi đó, nhà thầu xếp hạng nhất sẽ bị loại và không được hoàn trả bảo đảm dự thầu. Chủ đầu tư sẽ mời nhà thầu có xếp hạng tiếp theo trong danh sách đã được phê duyệt vào để tiến hành thương thảo hợp đồng."
    },
    {
        id: 150,
        question: "Nhận định nào sau đây đúng về văn bản điện tử trên Hệ thống mạng đấu thầu quốc gia?",
        options: {
            A: "Văn bản điện tử trên Hệ thống có giá trị theo quy định của pháp luật về giao dịch điện tử, làm cơ sở đối chiếu, so sánh, xác thực thông tin phục vụ công tác đánh giá, thẩm định, thanh tra, kiểm tra, kiểm toán và giải ngân",
            B: "Thời điểm gửi, nhận văn bản điện tử được xác định căn cứ theo thời gian thực ghi lại trên Hệ thống",
            C: "Khi gửi hồ sơ thanh quyết toán đến Kho bạc Nhà nước, nhà thầu không phải cung cấp thông tin, tài liệu cho Kho bạc Nhà nước đối với các thông tin, tài liệu là văn bản điện tử trên Hệ thống",
            D: "Cả 3 phương án trên đều đúng"
        },
        correctAnswer: "D",
        explanation: "Căn cứ khoản 3, Điều 50, \"Văn bản điện tử trên Hệ thống mạng đấu thầu quốc gia có giá trị theo quy định của pháp luật về giao dịch điện tử, làm cơ sở đối chiếu, so sánh, xác thực thông tin...\". Điều này xác nhận phương án A. Khoản 2, Điều 51 quy định về nguồn thời gian của Hệ thống, xác nhận phương án B. Nguyên tắc của giao dịch điện tử và đấu thầu qua mạng là sử dụng dữ liệu điện tử đã có trên hệ thống để thực hiện các thủ tục, do đó nhà thầu không cần cung cấp lại các văn bản đã có cho Kho bạc, xác nhận phương án C."
    }
];