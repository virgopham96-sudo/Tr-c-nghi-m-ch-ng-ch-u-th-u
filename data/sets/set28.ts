import { Question } from '../../types';

export const set28: Question[] = [
    {
        "id": 271,
        "question": "Gói thầu hàng hóa có giá gói thầu 01 tỷ đồng thực hiện chào giá trực tuyến theo quy trình rút gọn, trường hợp chủ đầu tư đăng tải thông báo mời thầu vào 11h00 ngày Thứ 2 (15/9/2025), thời điểm nào sau đây là thời điểm kết thúc chào giá trực tuyến sớm nhất?",
        "options": {
            "A": "08h00 ngày thứ 6 (19/9/2025)",
            "B": "08h00 ngày thứ bảy (20/9/2025)",
            "C": "11h00 ngày thứ 6 (19/9/2025)",
            "D": "08h00 ngày thứ 2 (22/9/2025)"
        },
        "correctAnswer": "C",
        "explanation": "Quy trình rút gọn yêu cầu thời gian chuẩn bị tối thiểu là 3 ngày làm việc. Đăng tải lúc 11h00 ngày Thứ 2 (15/9). 3 ngày làm việc tiếp theo là Thứ 3, Thứ 4, Thứ 5. Thời điểm đóng thầu (bắt đầu chào giá) sớm nhất là 11h00 ngày Thứ 6 (19/9). Phiên chào giá rút gọn có thể diễn ra rất nhanh, có thể chỉ trong 1-2 giờ. Do đó, thời điểm kết thúc sớm nhất có thể là trong cùng ngày 19/9."
    },
    {
        "id": 272,
        "question": "Đối với đấu thầu qua mạng, thành phần nào sau đây không được coi là một phần của E-HSMT và nhà thầu không phải đáp ứng các yêu cầu này?",
        "options": {
            "A": "Bảng dữ liệu được số hóa dưới dạng webform trên Hệ thống mạng đấu thầu quốc gia",
            "B": "Tiêu chuẩn đánh giá về tính hợp lệ được đính kèm trên Hệ thống mạng đấu thầu quốc gia",
            "C": "Yêu cầu về năng lực, kinh nghiệm được đính kèm trên Hệ thống mạng đấu thầu quốc gia",
            "D": "Phương án B và C đều đúng"
        },
        "correctAnswer": "A",
        "explanation": "Bảng dữ liệu (webform) là công cụ để nhà thầu nhập thông tin vào E-HSDT (hồ sơ dự thầu), không phải là một phần của E-HSMT (hồ sơ mời thầu). E-HSMT bao gồm các file đính kèm quy định về yêu cầu (như B và C)."
    },
    {
        "id": 273,
        "question": "Yêu cầu nào sau đây là đúng đối với tệp tin (file) đăng tải trên Hệ thống mạng đấu thầu quốc gia?",
        "options": {
            "A": "Các file mở, đọc được bằng các phần mềm thông dụng như: các phần mềm đọc, soạn thảo văn bản MS Office hoặc Open Office; các phần mềm đọc file PDF; các phần mềm thiết kế thông dụng như AutoCad, Photoshop; phần mềm đọc file ảnh tích hợp sẵn trên Hệ điều hành Windows. Các file sử dụng phông chữ không thuộc bảng mã Unicode",
            "B": "Các file nén mở được bằng các phần mềm giải nén thông dụng như phần mềm giải nén ZIP tích hợp sẵn trên hệ điều hành Windows, MacOS hoặc phần mềm giải nén Rar hoặc 7Zip. Trường hợp sử dụng file nén, các file sau khi giải nén phải có định dạng đúng quy định.",
            "C": "Không bị nhiễm virus, không bị lỗi, hỏng và không thiết lập mật khẩu",
            "D": "Các phương án trên đều đúng"
        },
        "correctAnswer": "D",
        "explanation": "Để đảm bảo các file có thể được mở và đọc bởi tất cả các bên, Hệ thống đưa ra các yêu cầu kỹ thuật cơ bản: sử dụng các định dạng file phổ biến (A), sử dụng phông chữ Unicode (B), và không bị lỗi kỹ thuật như virus, hỏng, có mật khẩu (C). Cả ba đều là yêu cầu đúng."
    },
    {
        "id": 274,
        "question": "Đối với đấu thầu qua mạng, trường hợp file đính kèm trong E-HSMT không thể mở hoặc không đọc được thì chủ đầu tư phải thực hiện hành động nào sau đây?",
        "options": {
            "A": "Đăng tải và phát hành lại toàn bộ E-HSMT",
            "B": "Sửa đổi E-HSMT và không phải phát hành lại toàn bộ E-HSMT",
            "C": "Đề nghị Trung tâm Đấu thầu qua mạng quốc gia sửa đổi E-HSMT trong trường hợp chủ đầu tư không sửa đổi được E-HSMT",
            "D": "Các phương án trên đều đúng"
        },
        "correctAnswer": "A",
        "explanation": "Nếu E-HSMT (hồ sơ mời thầu) do chủ đầu tư phát hành bị lỗi, khiến nhà thầu không thể truy cập được thông tin, thì đây là lỗi của bên mời thầu. Chủ đầu tư phải khắc phục bằng cách sửa lỗi và đăng tải lại toàn bộ bộ E-HSMT hoàn chỉnh để nhà thầu có thể tải về và sử dụng."
    },
    {
        "id": 275,
        "question": "Đối với đấu thầu qua mạng, trường hợp Hệ thống mạng đấu thầu quốc gia gặp sự cố không thể vận hành và phải tự động gia hạn thời điểm đóng thầu của các gói thầu bị ảnh hưởng (có thời điểm đóng thầu trong thời gian từ khi Hệ thống bị sự cố cho đến thời điểm sau hoàn thành khắc phục sự cố 02 giờ) thì việc đánh giá E-HSDT được thực hiện trên cơ sở thời điểm đóng thầu nào sau đây?",
        "options": {
            "A": "Thời điểm đóng thầu nêu trong E-TBMT đã được đăng tải trước thời điểm Hệ thống mạng đấu thầu quốc gia gặp sự cố",
            "B": "Thời điểm đóng thầu mà Hệ thống mạng đấu thầu quốc gia tự động gia hạn",
            "C": "Do Chủ đầu tư quyết định",
            "D": "Phương án A và B đều đúng"
        },
        "correctAnswer": "B",
        "explanation": "Khi hệ thống gặp sự cố và tự động gia hạn thời điểm đóng thầu, thời điểm đóng thầu mới sẽ trở thành mốc thời gian pháp lý chính thức của gói thầu. Tất cả các E-HSDT nộp trước thời điểm đóng thầu mới này đều được coi là hợp lệ và sẽ được mở để đánh giá."
    },
    {
        "id": 276,
        "question": "Loại Chứng thư số nào sau đây được sử dụng trên Hệ thống mạng đấu thầu quốc gia?",
        "options": {
            "A": "Chứng thư số chuyên dùng do tất cả tổ chức có chức năng cung cấp dịch vụ chứng thực chữ ký số chuyên dùng cấp",
            "B": "Tất cả các loại chứng thư số",
            "C": "Chứng thư số công cộng do tổ chức cung cấp dịch vụ chứng thực chữ ký số công cộng cấp hoặc chứng thư số do tổ chức cung cấp dịch vụ chứng thực chữ ký số chuyên dùng Chính phủ cấp",
            "D": "Phương án A và C đều đúng"
        },
        "correctAnswer": "C",
        "explanation": "Hệ thống mạng đấu thầu quốc gia yêu cầu sử dụng chứng thư số công cộng để đảm bảo tính xác thực và pháp lý của các giao dịch điện tử. Các chứng thư số này phải được cấp bởi các tổ chức được cấp phép theo quy định của pháp luật."
    },
    {
        "id": 277,
        "question": "Đối với đấu thầu qua mạng, trường hợp nhà thầu sử dụng bảo lãnh dự thầu điện tử trên Hệ thống mạng đấu thầu quốc gia, phát biểu nào sau đây là đúng?",
        "options": {
            "A": "Giá trị bảo lãnh dự thầu luôn đáp ứng yêu cầu trong E-HSMT",
            "B": "Thời gian hiệu lực của bảo lãnh dự thầu luôn đáp ứng yêu cầu trong E-HSMT",
            "C": "Đối tượng thụ hưởng bảo lãnh dự thầu luôn đáp ứng yêu cầu trong E-HSMT",
            "D": "Các phương án trên đều đúng"
        },
        "correctAnswer": "D",
        "explanation": "Bảo lãnh dự thầu điện tử là một quy trình khép kín trên hệ thống, liên kết giữa nhà thầu, ngân hàng và bên mời thầu. Hệ thống sẽ tự động kiểm tra và xác nhận tính hợp lệ của bảo lãnh về giá trị (A), thời gian hiệu lực (B), và đối tượng thụ hưởng (C). Do đó, cả ba yếu tố này luôn được đảm bảo đáp ứng yêu cầu."
    },
    {
        "id": 278,
        "question": "Gói thầu mua sắm hàng hóa có: - Thời điểm đóng thầu theo E-TBMT là: 18h00 ngày 25/9/2025 - Hiệu lực của bảo đảm dự thầu theo yêu cầu của E-HSMT là: 90 ngày - Do lỗi hệ thống nên Hệ thống tự động gia hạn thời điểm đóng thầu mới là: 11h ngày 26/9/2025 Nhà thầu A đã nộp E-HSDT trước thời điểm Hệ thống xảy ra sự cố với hiệu lực của bảo đảm dự thầu là 90 ngày kể từ ngày 25/9/2025; Nhà thầu B nộp E-HSDT sau khi Hệ thống được khắc phục và trước thời điểm đóng thầu mới với hiệu lực của bảo đảm dự thầu là 90 ngày kể từ ngày 26/9/2025. Trong trường hợp này, bảo đảm dự thầu của nhà thầu A và nhà thầu B được đánh giá như thế nào?",
        "options": {
            "A": "Bảo đảm dự thầu của nhà thầu A được đánh giá là không hợp lệ; Bảo đảm dự thầu của nhà thầu B được đánh giá là hợp lệ",
            "B": "Bảo đảm dự thầu của nhà thầu A và nhà thầu B đều được đánh giá là hợp lệ",
            "C": "Bảo đảm dự thầu của nhà thầu A được đánh giá là hợp lệ; Bảo đảm dự thầu của nhà thầu B được đánh giá là không hợp lệ",
            "D": "Bảo đảm dự thầu của nhà thầu A và nhà thầu B đều được đánh giá là không hợp lệ"
        },
        "correctAnswer": "C",
        "explanation": "Thời điểm đóng thầu ban đầu là 25/9. Do sự cố, thời điểm đóng thầu mới là 26/9. Nhà thầu A nộp HSDT trước sự cố, bảo đảm dự thầu có hiệu lực 90 ngày kể từ 25/9. Tại thời điểm đóng thầu mới (26/9), bảo đảm dự thầu của A vẫn còn hiệu lực (chỉ mới qua 1 ngày). Do đó, bảo đảm của A hợp lệ. Nhà thầu B nộp HSDT sau sự cố, nhưng bảo đảm dự thầu lại có hiệu lực 90 ngày kể từ 26/9. Điều này không đúng với yêu cầu của HSMT (yêu cầu hiệu lực từ 25/9). Do đó, bảo đảm của B không hợp lệ."
    },
    {
        "id": 279,
        "question": "So sánh điều kiện xét duyệt trúng thầu giữa phương pháp giá cố định và phương pháp dựa trên kỹ thuật đối với gói thầu dịch vụ tư vấn, điểm chung quyết định để nhà thầu được xếp hạng thứ nhất là gì?",
        "options": {
            "A": "Có giá dự thầu thấp nhất",
            "B": "Có điểm tổng hợp cao nhất",
            "C": "Có điểm kỹ thuật cao nhất",
            "D": "Có giá đề nghị trúng thầu thấp nhất"
        },
        "correctAnswer": "C",
        "explanation": "Căn cứ pháp lý: Điều 59, khoản 2 và khoản 4 của Luật Đấu thầu. Cả hai phương pháp này đều ưu tiên tuyệt đối cho chất lượng kỹ thuật. Phương pháp giá cố định: Giá được cố định, các nhà thầu đáp ứng kỹ thuật sẽ được so sánh về điểm kỹ thuật, nhà thầu có điểm kỹ thuật cao nhất sẽ trúng thầu. Phương pháp dựa trên kỹ thuật: Nhà thầu có điểm kỹ thuật cao nhất sẽ được mời vào mở hồ sơ tài chính và thương thảo hợp đồng. Do đó, điểm chung quyết định thứ hạng là 'có điểm kỹ thuật cao nhất'."
    },
    {
        "id": 280,
        "question": "Phương pháp kết hợp giữa kỹ thuật và giá được áp dụng cho gói thầu tư vấn có đặc điểm nào trong các phương án sau đây?",
        "options": {
            "A": "Gói thầu tư vấn đơn giản, chi phí thấp",
            "B": "Gói thầu tư vấn có yêu cầu kỹ thuật rất cao, chi phí cố định",
            "C": "Gói thầu tư vấn chú trọng tới cả chất lượng và chi phí thực hiện",
            "D": "Gói thầu tư vấn có quy trình thực hiện đã được tiêu chuẩn hoá"
        },
        "correctAnswer": "C",
        "explanation": "Căn cứ pháp lý: Điều 59, khoản 3, điểm a của Luật Đấu thầu. Phương pháp này được thiết kế để cân bằng giữa hai yếu tố quan trọng là chất lượng (thể hiện qua điểm kỹ thuật) và chi phí (thể hiện qua điểm giá). Nó được áp dụng cho các gói thầu mà cả hai yếu tố này đều cần được xem xét một cách hài hòa."
    }
];