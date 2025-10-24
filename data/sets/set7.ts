import { Question } from '../../types';

export const set7: Question[] = [
    {
        id: 61,
        question: "Khi đánh giá về năng lực, kinh nghiệm đối với gói thầu mua sắm hàng hóa, nhà thầu được đánh giá là đạt khi nào?",
        options: {
            A: "Nhà thầu được đánh giá đạt tất cả tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời thầu",
            B: "Nhà thầu đáp ứng một trong các tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời thầu",
            C: "Nhà thầu đáp ứng hai phần ba các tiêu chuẩn đánh giá về năng lực và kinh nghiệm trong hồ sơ mời thầu",
            D: "Nhà thầu đáp ứng các tiêu chuẩn đánh giá về năng lực và kinh nghiệm quan trọng trong hồ sơ mời thầu"
        },
        correctAnswer: "A",
        explanation: "Phương pháp đánh giá năng lực và kinh nghiệm là \"đạt/không đạt\" (theo khoản 4, Điều 58). Nhà thầu phải đáp ứng (\"đạt\") TẤT CẢ các yêu cầu tối thiểu về năng lực và kinh nghiệm được nêu trong hồ sơ mời thầu. Nếu không đáp ứng dù chỉ một tiêu chí, nhà thầu sẽ bị đánh giá là \"không đạt\" và bị loại."
    },
    {
        id: 62,
        question: "Việc đánh giá về nhân sự chủ chốt và thiết bị chủ yếu đối với gói thầu xây lắp tổ chức đấu thầu rộng rãi được thực hiện như thế nào?",
        options: {
            A: "Đánh giá tất cả các nhà thầu tham dự thầu",
            B: "Đánh giá đối với nhà thầu xếp thứ nhất",
            C: "Đánh giá đối với tất cả các nhà thầu được đánh giá đạt về kỹ thuật",
            D: "Không đánh giá về nhân sự chủ chốt và thiết bị chủ yếu"
        },
        correctAnswer: "C",
        explanation: "Theo quy trình đánh giá hồ sơ dự thầu, việc đánh giá chi tiết (bao gồm nhân sự, thiết bị) được thực hiện sau khi nhà thầu đã vượt qua bước đánh giá sơ bộ về tính hợp lệ, năng lực và kinh nghiệm. Do đó, tất cả các nhà thầu được xem xét là đáp ứng cơ bản và được đưa vào vòng đánh giá kỹ thuật chi tiết sẽ được đánh giá về nhân sự và thiết bị."
    },
    {
        id: 63,
        question: "Đối với gói thầu mua sắm hàng hóa áp dụng hình thức chào hàng cạnh tranh, trường hợp hồ sơ mời thầu không yêu cầu về năng lực, kinh nghiệm thì việc đánh giá được thực hiện như thế nào?",
        options: {
            A: "Không phải đánh giá về năng lực, kinh nghiệm nhưng nhà thầu phải cam kết đáp ứng năng lực, kinh nghiệm trong đơn dự thầu",
            B: "Trường hợp nhà thầu đính kèm tài liệu về năng lực, kinh nghiệm thì chủ đầu tư bắt buộc phải đánh giá về năng lực, kinh nghiệm của nhà thầu",
            C: "Bắt buộc phải đánh giá năng lực, kinh nghiệm của nhà thầu",
            D: "Phương án A và B đều đúng"
        },
        correctAnswer: "A",
        explanation: "Căn cứ khoản 2, Điều 24, \"Đối với gói thầu áp dụng chào hàng cạnh tranh, hồ sơ mời thầu không bắt buộc quy định tiêu chuẩn đánh giá về năng lực, kinh nghiệm của nhà thầu\". Khi HSMT không yêu cầu thì sẽ không tiến hành đánh giá. Tuy nhiên, để đảm bảo khả năng thực hiện hợp đồng, nhà thầu vẫn phải có cam kết về việc sẽ đáp ứng đủ năng lực khi thực hiện."
    },
    {
        id: 64,
        question: "Đối với gói thầu xây lắp tổ chức đấu thầu rộng rãi, hồ sơ mời thầu có bắt buộc quy định việc đánh giá đối với yêu cầu về nguồn lực tài chính phải bằng cam kết tín dụng không?",
        options: {
            A: "Bắt buộc quy định trong hồ sơ mời thầu do đây là tiêu chí chứng minh nguồn lực tài chính",
            B: "Không bắt buộc quy định, hồ sơ mời thầu có thể đưa ra yêu cầu về cam kết cung cấp tín dụng hoặc không yêu cầu về cam kết cung cấp tín dụng",
            C: "Bắt buộc quy định trong hồ sơ mời thầu đối với gói thầu xây lắp áp dụng phương thức một giai đoạn hai túi hồ sơ",
            D: "Bắt buộc quy định trong hồ sơ mời thầu đối với gói thầu có giá trên 20 tỷ đồng"
        },
        correctAnswer: "B",
        explanation: "Luật Đấu thầu yêu cầu nhà thầu phải chứng minh khả năng huy động vốn để thực hiện gói thầu. Việc chứng minh này có thể bằng nhiều hình thức như: báo cáo tài chính thể hiện vốn chủ sở hữu, hạn mức tín dụng còn lại, hoặc cam kết cung cấp tín dụng của tổ chức tín dụng. Việc bắt buộc chỉ một hình thức là cam kết tín dụng sẽ gây hạn chế cạnh tranh, không phù hợp với quy định tại khoản 3, Điều 44. Do đó, bên mời thầu có thể yêu cầu nhưng không bắt buộc."
    },
    {
        id: 65,
        question: "Đối với gói thầu chia thành 2 phần (phần 1: mua sắm máy tính; phần 2: mua sắm bàn ghế cho cán bộ công chức), áp dụng phương pháp giá thấp nhất. Máy tính và bàn ghế là hàng hóa thuộc danh mục do Chính phủ, Thủ tướng Chính phủ quy định tiêu chuẩn, định mức, việc xét duyệt trúng thầu trong trường hợp này được thực hiện như thế nào?",
        options: {
            A: "Giá đề nghị trúng thầu của từng hàng hóa đảm bảo không vượt mức giá của từng hàng hóa đó theo tiêu chuẩn, định mức do cấp có thẩm quyền ban hành và tổng giá đề nghị trúng thầu của gói thầu là thấp nhất, không vượt giá gói thầu được duyệt",
            B: "Tổng giá đề nghị trúng thầu của gói thầu là thấp nhất và không vượt giá gói thầu được duyệt mà không so sánh với ước tính chi phí của từng phần, không cần so sánh với tiêu chuẩn, định mức từng mặt hàng",
            C: "Giá từng phần thấp nhất, tổng giá đề nghị trúng thầu không vượt giá gói thầu được duyệt, không cần so sánh với tiêu chuẩn, định mức từng mặt hàng",
            D: "Tất cả phương án trên đều sai"
        },
        correctAnswer: "A",
        explanation: "Câu hỏi đề cập đến hàng hóa thuộc danh mục có \"tiêu chuẩn, định mức\" do Chính phủ, Thủ tướng Chính phủ ban hành. Trong trường hợp này, việc xét thầu phải tuân thủ hai nguyên tắc đồng thời: 1) Giá của từng mặt hàng không được vượt định mức đã ban hành; 2) Tổng giá đề nghị trúng thầu của nhà thầu phải là thấp nhất (theo phương pháp giá thấp nhất) và không vượt giá gói thầu đã duyệt. Phương án A thể hiện đầy đủ cả hai yêu cầu này."
    },
    {
        id: 66,
        question: "Đối với gói thầu xây lắp áp dụng đấu thầu rộng rãi qua mạng, trường hợp E-HSMT quy định nhà thầu phải cung cấp đầy đủ các tài liệu: giấy đăng ký thiết bị, hợp đồng, hóa đơn mua hàng, giấy đăng kiểm, kiểm định theo quy định của pháp luật để chứng minh khả năng huy động thiết bị thi công chủ yếu thì nhà thầu phải cung cấp những tài liệu nào?",
        options: {
            A: "Phải cung cấp đầy đủ theo yêu cầu của E-HSMT gồm: giấy đăng ký thiết bị, hợp đồng, hóa đơn mua hàng, giấy đăng kiểm, kiểm định theo quy định của pháp luật",
            B: "Chỉ cần cung cấp một trong các tài liệu: giấy đăng ký thiết bị, hợp đồng, hóa đơn mua hàng, giấy đăng kiểm, kiểm định theo quy định của pháp luật",
            C: "Phải bắt buộc cung cấp giấy đăng ký thiết bị kèm theo giấy đăng kiểm, kiểm định theo quy định của pháp luật",
            D: "Phải bắt buộc cung cấp hợp đồng, hóa đơn mua hàng"
        },
        correctAnswer: "B",
        explanation: "Mục đích của việc yêu cầu tài liệu là để chứng minh nhà thầu có khả năng huy động thiết bị, chứ không phải để gây khó khăn. Việc yêu cầu nhà thầu phải cung cấp tất cả các loại giấy tờ cho cùng một thiết bị là một yêu cầu quá mức, có thể gây hạn chế cạnh tranh (vi phạm khoản 3, Điều 44). Theo nguyên tắc đấu thầu, bất kỳ tài liệu hợp pháp nào chứng minh được khả năng huy động (ví dụ: giấy tờ sở hữu, hợp đồng thuê, hóa đơn mua...) đều có thể được chấp nhận. Do đó, việc cung cấp một trong các tài liệu đó là đủ để chứng minh."
    },
    {
        id: 67,
        question: "Danh sách xếp hạng nhà thầu có phải thẩm định trước khi phê duyệt hay không?",
        options: {
            A: "Bắt buộc",
            B: "Không bắt buộc",
            C: "Do chủ đầu tư quyết định",
            D: "Do người có thẩm quyền quyết định"
        },
        correctAnswer: "A",
        explanation: "Căn cứ điểm đ, khoản 1, Điều 43, quy trình lựa chọn nhà thầu bao gồm bước \"Trình, thẩm định, phê duyệt, công khai kết quả lựa chọn nhà thầu...\". Danh sách xếp hạng nhà thầu là cơ sở trực tiếp để xác định kết quả lựa chọn nhà thầu. Do đó, toàn bộ kết quả đánh giá hồ sơ dự thầu, bao gồm danh sách xếp hạng, phải được thẩm định trước khi người có thẩm quyền phê duyệt."
    },
    {
        id: 68,
        question: "Trường hợp tại thời điểm đóng thầu đối với gói thầu áp dụng hình thức đấu thầu rộng rãi (không áp dụng sơ tuyển, mời quan tâm, không cấp bách cần thực hiện ngay do yêu cầu về tiến độ) mà chỉ có 01 nhà thầu nộp hồ sơ dự thầu thì xử lý như thế nào?",
        options: {
            A: "Mở thầu ngay để tiến hành đánh giá",
            B: "Gia hạn thời điểm đóng thầu tối thiểu 10 ngày",
            C: "Báo cáo người có thẩm quyền xem xét, quyết định",
            D: "Phương án A và C đều đúng"
        },
        correctAnswer: "A",
        explanation: "Luật Đấu thầu hiện hành không quy định số lượng nhà thầu tối thiểu phải nộp hồ sơ dự thầu để tiến hành mở thầu. Miễn là gói thầu đã được thông báo mời thầu rộng rãi theo đúng quy định, việc chỉ có một nhà thầu tham gia không phải là lý do để hủy thầu hay gia hạn. Bên mời thầu sẽ tiến hành mở thầu theo quy định và đánh giá hồ sơ dự thầu của nhà thầu duy nhất đó theo các tiêu chuẩn của hồ sơ mời thầu."
    },
    {
        id: 69,
        question: "Đối với gói thầu xây lắp, trường hợp công ty mẹ tham dự thầu và huy động công ty con tham gia thực hiện gói thầu thì việc đánh giá kinh nghiệm thực hiện hợp đồng tương tự được thực hiện như thế nào?",
        options: {
            A: "Đánh giá kinh nghiệm thực hiện hợp đồng tương tự của công ty mẹ, không đánh giá kinh nghiệm của công ty con",
            B: "Đánh giá kinh nghiệm thực hiện hợp đồng tương tự căn cứ vào giá trị, khối lượng công việc do công ty mẹ, công ty con đảm nhiệm trong gói thầu",
            C: "Đánh giá kinh nghiệm thực hiện hợp đồng tương tự của công ty con, không đánh giá kinh nghiệm của công ty mẹ, không phân biệt khối lượng công việc do công ty mẹ, công ty con đảm nhiệm trong gói thầu",
            D: "Đánh giá theo tổng kinh nghiệm thực hiện hợp đồng tương tự của công ty mẹ và công ty con, không phân biệt khối lượng công việc do công ty mẹ, công ty con đảm nhiệm trong gói thầu"
        },
        correctAnswer: "B",
        explanation: "Theo nguyên tắc đánh giá năng lực, kinh nghiệm, việc đánh giá phải dựa trên phạm vi công việc mà mỗi bên thực sự đảm nhận. Khi công ty mẹ (nhà thầu chính) huy động công ty con (nhà thầu phụ hoặc thành viên liên danh), năng lực và kinh nghiệm của mỗi bên sẽ được xem xét tương ứng với phần công việc mà họ được phân công thực hiện. Không thể cộng gộp kinh nghiệm của cả hai một cách cơ học mà không xem xét đến sự phân công công việc cụ thể."
    },
    {
        id: 70,
        question: "Kinh nghiệm thực hiện hợp đồng xây lắp tương tự gói thầu chi bao gồm 01 công trình độc lập được xét trên cơ sở nào sau đây?",
        options: {
            A: "Xét theo công trình nhà thầu đã hoàn thành toàn bộ hoặc hoàn thành phần lớn có loại kết cấu, cấp công trình và đáp ứng quy mô theo yêu cầu của hồ sơ mời thầu",
            B: "Chỉ xét theo công trình nhà thầu đã hoàn thành toàn bộ, đã được nghiệm thu, cùng loại công trình và đáp ứng quy mô theo yêu cầu của hồ sơ mời thầu",
            C: "Xét theo các hạng mục công việc có tính chất tương tự nhà thầu đã hoàn thành phần lớn",
            D: "Tất cả phương án trên đều đúng"
        },
        correctAnswer: "B",
        explanation: "Để được coi là hợp đồng tương tự, hợp đồng đó phải có các yếu tố cốt lõi tương đồng với gói thầu đang xét, bao gồm: tính chất công việc (cùng loại công trình), quy mô (giá trị, cấp công trình). Việc công trình đã được hoàn thành toàn bộ và nghiệm thu là bằng chứng xác thực nhất về năng lực và kinh nghiệm của nhà thầu. Các phương án khác không đầy đủ hoặc không chính xác."
    }
];
