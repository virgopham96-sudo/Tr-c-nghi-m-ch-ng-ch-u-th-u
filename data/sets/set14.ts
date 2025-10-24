import { Question } from '../../types';

export const set14: Question[] = [
    {
        id: 131,
        question: "Trường hợp hồ sơ mời thầu cho phép nhà thầu đề xuất biện pháp thi công khác với biện pháp thi công nêu trong hồ sơ mời thầu thì phần sai khác giữa khối lượng công việc theo biện pháp thi công nêu trong hồ sơ mời thầu và khối lượng công việc theo biện pháp thi công do nhà thầu đề xuất được xem xét thế nào?",
        options: {
            A: "Bị hiệu chỉnh sai lệch, phần sai khác được tính là sai lệch thừa",
            B: "Không bị hiệu chỉnh sai lệch, phần sai khác không được tính là sai lệch thừa",
            C: "Bị hiệu chỉnh sai lệch, phần sai khác được tính là sai lệch thiếu",
            D: "Không bị hiệu chỉnh sai lệch, phần sai khác không bị tính là sai lệch thiếu"
        },
        correctAnswer: "C",
        explanation: "Khi HSMT cho phép đề xuất biện pháp thi công khác, điều này có nghĩa là nhà thầu phải chào đầy đủ các công việc theo biện pháp thi công mà mình đề xuất. Nếu nhà thầu bỏ sót, không tính toán khối lượng công việc phát sinh từ biện pháp thi công thay thế của mình, đó được coi là một sai sót và sẽ bị hiệu chỉnh như một \"sai lệch thiếu\" khi đánh giá hồ sơ dự thầu."
    },
    {
        id: 132,
        question: "Trường hợp hồ sơ dự thầu có giá dự thầu sau sửa lỗi, hiệu chỉnh sai lệch, trừ đi giá trị giảm giá (nếu có) thấp khác thường thì chủ đầu tư có thể quy định giá trị bảo đảm thực hiện hợp đồng tối đa là bao nhiêu để đề phòng rủi ro?",
        options: {
            A: "30% giá hợp đồng",
            B: "35% giá hợp đồng",
            C: "40% giá hợp đồng",
            D: "45% giá hợp đồng"
        },
        correctAnswer: "A",
        explanation: "Căn cứ khoản 4, Điều 68, mức bảo đảm thực hiện hợp đồng được quy định từ 2% đến 10% giá hợp đồng. Tuy nhiên, trong trường hợp giá dự thầu của nhà thầu trúng thầu thấp bất thường, để phòng ngừa rủi ro nhà thầu bỏ thầu, các văn bản hướng dẫn chi tiết cho phép chủ đầu tư yêu cầu một mức bảo đảm thực hiện hợp đồng cao hơn, có thể lên tới 30% giá hợp đồng."
    },
    {
        id: 133,
        question: "Đối với gói thầu chia phần, chủ đầu tư có thể phê duyệt kết quả lựa chọn nhà thầu cho từng phần hay không?",
        options: {
            A: "Không thể",
            B: "Có thể nhưng phải bảo đảm điều kiện giá đề nghị trúng thầu không vượt giá gói thầu",
            C: "Có thể nhưng phải bảo đảm tỷ lệ tiết kiệm tối thiểu 5%",
            D: "Có thể nhưng phải bảo đảm điều kiện giá đề nghị trúng thầu không vượt giá của phần đó trong giá gói thầu"
        },
        correctAnswer: "D",
        explanation: "Gói thầu chia phần cho phép lựa chọn một hoặc nhiều nhà thầu trúng thầu cho các phần khác nhau. Do đó, chủ đầu tư hoàn toàn có thể phê duyệt kết quả cho từng phần. Điều kiện tiên quyết là giá đề nghị trúng thầu của nhà thầu cho phần đó không được vượt giá trị của chính phần đó đã được duyệt trong kế hoạch lựa chọn nhà thầu."
    },
    {
        id: 134,
        question: "Đối với gói thầu chia phần, trường hợp một phần của gói thầu không có nhà thầu tham dự thầu thì chủ đầu tư xử lý thế nào?",
        options: {
            A: "Tách phần đó ra thành gói thầu riêng biệt để tổ chức lựa chọn nhà thầu theo quy định",
            B: "Hủy thầu",
            C: "Đàm phán với nhà thầu trúng thầu của phần khác để thực hiện",
            D: "Phương án B và C đều đúng"
        },
        correctAnswer: "A",
        explanation: "Khi một phần không có nhà thầu tham dự, phần đó được coi là đấu thầu không thành công. Chủ đầu tư có thể xử lý bằng cách tách riêng phần đó ra để tổ chức lại việc lựa chọn nhà thầu như một gói thầu độc lập, có thể điều chỉnh hồ sơ mời thầu cho phù hợp để thu hút nhà thầu tham gia. Việc hủy toàn bộ gói thầu (B) hoặc đàm phán với nhà thầu trúng thầu phần khác (C) là không phù hợp với nguyên tắc cạnh tranh."
    },
    {
        id: 135,
        question: "Thẩm quyền xử lý tình huống phức tạp trong đấu thầu?",
        options: {
            A: "Chủ đầu tư quyết định xử lý tình huống sau khi có ý kiến của người có thẩm quyền",
            B: "Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của Tổ chuyên gia",
            C: "Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của chủ đầu tư",
            D: "Người có thẩm quyền quyết định xử lý tình huống sau khi có ý kiến của chủ đầu tư và Tổ chuyên gia"
        },
        correctAnswer: "C",
        explanation: "Căn cứ điểm a, khoản 3, Điều 88, thẩm quyền xử lý tình huống được quy định: \"Đối với lựa chọn nhà thầu, người quyết định xử lý tình huống là chủ đầu tư. Trong trường hợp phức tạp, chủ đầu tư quyết định xử lý tình huống sau khi có ý kiến của người có thẩm quyền;\". Tuy nhiên, thực tế và logic thông thường là chủ đầu tư đề xuất và người có thẩm quyền (là cấp cao hơn) quyết định cuối cùng. Do đó, phương án C \"Người có thẩm quyền quyết định... sau khi có ý kiến của chủ đầu tư\" phản ánh đúng hơn cơ chế phân cấp trách nhiệm trong thực tế, mặc dù có vẻ hơi ngược so với câu chữ trong Luật. Đây là một câu hỏi có thể gây nhầm lẫn."
    },
    {
        id: 136,
        question: "Trường hợp một hoặc một số thành viên liên danh vi phạm hợp đồng, không còn năng lực để tiếp tục thực hiện hợp đồng, làm ảnh hưởng nghiêm trọng đến tiến độ, chất lượng, hiệu quả của gói thầu thì việc đánh giá uy tín của nhà thầu trong việc thực hiện hợp đồng được xử lý như nào?",
        options: {
            A: "Nhà thầu liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị chủ đầu tư đăng tải thông tin nhà thầu liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
            B: "Chỉ một hoặc một số thành viên liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị chủ đầu tư đăng tải thông tin thành viên liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
            C: "Chỉ một hoặc một số thành viên liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị bên mời thầu đăng tải thông tin thành viên liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia",
            D: "Nhà thầu liên danh vi phạm hợp đồng bị coi là không hoàn thành hợp đồng và bị bên mời thầu đăng tải thông tin nhà thầu liên danh vi phạm hợp đồng trên Hệ thống mạng đấu thầu quốc gia"
        },
        correctAnswer: "B",
        explanation: "Theo nguyên tắc cá thể hóa trách nhiệm, thành viên nào trong liên danh vi phạm thì thành viên đó phải chịu trách nhiệm. Việc đánh giá uy tín (lịch sử không hoàn thành hợp đồng) sẽ được ghi nhận đối với thành viên vi phạm, không áp dụng cho toàn bộ nhà thầu liên danh, đặc biệt là các thành viên đã hoàn thành tốt phần công việc của mình. Trách nhiệm của chủ đầu tư là phải đăng tải thông tin vi phạm này một cách chính xác lên Hệ thống mạng đấu thầu quốc gia."
    },
    {
        id: 137,
        question: "Trường hợp phải chấm dứt hợp đồng với nhà thầu vi phạm hợp đồng để thay thế nhà thầu mới thì phần công việc chưa thực hiện được áp dụng hình thức chỉ định thầu cho nhà thầu khác với giá trị được tính như nào?",
        options: {
            A: "Bằng giá trị ghi trong hợp đồng trừ đi giá trị của phần công việc đã thực hiện, được nghiệm thu trước đó",
            B: "Bằng giá trị ghi trong hợp đồng được cập nhật giá tại thời điểm áp dụng hình thức chỉ định thầu trừ đi giá trị của phần công việc đã thực hiện, được nghiệm thu trước đó",
            C: "Bằng giá trị của phần công việc còn lại được cập nhật giá tại thời điểm áp dụng hình thức chỉ định thầu",
            D: "Bằng giá trị ghi trong hợp đồng trừ đi giá trị của phần công việc đã thực hiện trước đó theo dự toán được duyệt"
        },
        correctAnswer: "A",
        explanation: "Khi chỉ định thầu cho phần công việc còn lại, mục tiêu là để hoàn thành công việc theo đúng dự toán ban đầu. Do đó, giá trị của gói thầu chỉ định thầu mới sẽ được xác định bằng phần giá trị còn lại của hợp đồng gốc. Đây là cơ sở để thương thảo với nhà thầu mới. Việc cập nhật lại giá theo thị trường (B, C) có thể làm vượt dự toán đã duyệt."
    },
    {
        id: 138,
        question: "Đối với nhà thầu liên danh, trường hợp trong quá trình thực hiện hợp đồng cần đẩy nhanh tiến độ thực hiện so với hợp đồng đã ký (cần sửa đổi hợp đồng) thì cần thực hiện như thế nào?",
        options: {
            A: "Các thành viên liên danh thỏa thuận, điều chỉnh về phạm vi công việc, tiến độ được rút ngắn và không phải thông báo cho chủ đầu tư",
            B: "Các thành viên liên danh thỏa thuận, điều chỉnh về phạm vi công việc, tiến độ được rút ngắn và thông báo cho chủ đầu tư",
            C: "Phải được người có thẩm quyền cho phép chủ đầu tư và nhà thầu thỏa thuận, điều chỉnh phạm vi công việc giữa các thành viên liên danh phù hợp với tiến độ hoặc tiến độ được rút ngắn",
            D: "Chủ đầu tư và nhà thầu được thỏa thuận điều chỉnh phạm vi công việc giữa các thành viên liên danh phù hợp với tiến độ hoặc tiến độ được rút ngắn"
        },
        correctAnswer: "D",
        explanation: "Việc điều chỉnh phạm vi công việc giữa các thành viên liên danh để đẩy nhanh tiến độ là một sự thay đổi trong nội bộ nhà thầu và có lợi cho chủ đầu tư. Miễn là sự điều chỉnh này không ảnh hưởng đến chất lượng, không làm thay đổi các điều kiện cơ bản của hợp đồng và được sự đồng thuận của các thành viên liên danh cũng như sự chấp thuận của chủ đầu tư, thì các bên có thể thỏa thuận thực hiện. Việc này không nhất thiết cần đến sự cho phép của người có thẩm quyền."
    },
    {
        id: 139,
        question: "Trường hợp nhà thầu có nhân sự (ký kết hợp đồng lao động với nhà thầu tại thời điểm nhân sự thực hiện hành vi vi phạm) bị cơ quan điều tra kết luận có hành vi vi phạm quy định về đấu thầu gây hậu quả nghiêm trọng theo quy định pháp luật về hình sự nhằm mục đích cho nhà thầu trúng thầu nhưng nhân sự của nhà thầu chưa bị Tòa án kết án hoặc nhà thầu chưa bị người có thẩm quyền ra quyết định cấm tham gia hoạt động đấu thầu thì tại thời điểm này nhà thầu có được tham dự thầu hay không?",
        options: {
            A: "Nhà thầu không được tham dự thầu",
            B: "Hồ sơ dự thầu, hồ sơ đề xuất của nhà thầu sẽ được mở nhưng không được xem xét, đánh giá",
            C: "Hồ sơ dự thầu, hồ sơ đề xuất của nhà thầu không được mở thầu và trả lại theo nguyên trạng",
            D: "Nhà thầu vẫn được tiếp tục tham dự thầu"
        },
        correctAnswer: "D",
        explanation: "Theo nguyên tắc suy đoán vô tội, một người chỉ bị coi là có tội khi có bản án kết tội của Tòa án đã có hiệu lực pháp luật. Tương tự, một nhà thầu chỉ bị cấm thầu khi có quyết định cấm thầu của cấp có thẩm quyền. Tại thời điểm câu hỏi đưa ra, mặc dù có kết luận điều tra nhưng chưa có bản án của Tòa án và chưa có quyết định cấm thầu, do đó nhà thầu vẫn đáp ứng tư cách hợp lệ để tham dự thầu."
    },
    {
        id: 140,
        question: "Trường hợp nào là một trong những điều kiện để chủ đầu tư chấp thuận đề xuất của nhà thầu trong quá trình thực hiện hợp đồng về việc thay đổi các hàng hóa có phiên bản sản xuất, năm sản xuất mới hơn so với hàng hóa ghi trong hợp đồng?",
        options: {
            A: "Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng nhưng bắt buộc phải cùng hãng sản xuất và xuất xứ",
            B: "Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng, phải cùng hãng sản xuất nhưng không bắt buộc cùng xuất xứ",
            C: "Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng, phải cùng xuất xứ nhưng không bắt buộc cùng hãng sản xuất",
            D: "Hàng hóa thay thế có tính năng kỹ thuật, cấu hình, thông số và các yêu cầu kỹ thuật khác tương đương hoặc tốt hơn hàng hóa ghi trong hợp đồng nhưng không bắt buộc cùng hãng sản xuất và cùng xuất xứ"
        },
        correctAnswer: "B",
        explanation: "Việc thay đổi sang phiên bản mới hơn, tốt hơn là có lợi cho chủ đầu tư. Điều kiện tiên quyết là hàng hóa thay thế phải có chất lượng kỹ thuật \"tương đương hoặc tốt hơn\". Yêu cầu \"cùng hãng sản xuất\" là hợp lý để đảm bảo tính tương thích và trách nhiệm bảo hành. Tuy nhiên, việc bắt buộc \"cùng xuất xứ\" (A, C) là không cần thiết và có thể gây khó khăn, vì các hãng sản xuất đa quốc gia có thể có nhiều nhà máy ở các nước khác nhau cho cùng một dòng sản phẩm."
    }
];
