1. Khái niệm hoisting.
   Hoisting là cơ chế mặc định của JavaScript để di chuyển tất cả các biến và hàm khi khai báo lên đầu scope trước khi chúng được thực thi.(Lưu ý đối với cơ chế này nó chỉ di chuyển khai báo, còn việc gán giá trị thì giữ nguyên.)
2. Sự khác nhau giữa let và var và const. Đối với bạn thì sẽ ưu tiên sử dụng cái nào nhiều hơn, vì sao?
   "let" tạo ra một biến chỉ có thể truy cập được trong block bao quanh nó, khác với "var" – tạo ra một biến có phạm vi truy cập xuyên suốt function chứa nó.
   Ưu tiên sử dụng let hơn, vì hiện tại ở ES6 var đã không còn được sử dụng nữa.
   const sử dụng để khai báo hằng và không thể thay đổi nó. Tuy nhiên ở các kiểu biến reference(bao gồm object, array, function) thì không thể tái khai báo giống let và var được nhưng vẫn có thể thực hiện cập nhật giá trị được.
   Ví dụ: object
   const person = {
   name: "Phan Nhat Loi",
   old: 24
   }

   person = {
   name:"Phan Nhat Loi,
   old: 25
   } // error

   person.old = 25 // success

   Ví dụ: array
   const fruits = ['apple','banana']
   fruits = ['apple','banana','kiwi'] //error
   fruits.push('kiwi') //success

3. Sự khác nhau giữa props và state trong React

- Props

* Là viết tắt của Properties. Nó là một object tích hợp trong React lưu trữ giá trị của các thuộc tính của thẻ và hoạt động tương tự như các thuộc tính HTML. Props cho phép chúng ta giao tiếp giữa các components với nhau bằng cách truyền tham số qua lại giữa các components.
* Hiểu đơn giản props là các đối số được truyền từ bên ngoài vào trong component, tương tự với const, nó không thể trực tiếp bị thay đổi giá trị mà có thể thông qua các function xử lý thay đổi được truyền từ bên ngoài vào.

- State

* Là một đối tượng React tích hợp được sử dụng để chứa dữ liệu hoặc thông tin về Component. State trong một component có thể thay đổi và bất cứ khi nào nó thay đổi, component sẽ render lại.
* Hiểu đơn giản thì state giống như một biến được khai báo bên trong component và có thể thay đổi bằng các hook hoặc các hàm setValue từ đó tạo ra sự tương tác tức thì giữa người dùng và hệ thống, tạo ra các thay đổi tức thời mà không cần phải reload toàn bộ trang dựa trên cơ chế rerender của React.

4. Nêu ưu điểm của TypeScript và Javascript. Có thể thay thế TypeScript hoàn toàn cho Javascript không? Tại sao?

- Ưu điểm của TypeScript:

* Hỗ trợ static typing: Chức năng đặc biết chỉ có ở Typescript,có thể khai báo kiểu cho biến và giúp trình biên dịch giảm thiểu được tỷ lệ gán sai của giá trị. Nếu bạn bỏ qua khai báo kiểu thì code của bạn sẽ tự động phát hiện.(Khi Typescript được biên dịch thành javascript thì mọi khai báo kiểu sẽ bị xóa)
* Interfaces: Typescript được sử dụng với mục đích kiểm tra, xem xét sự phù hợp của đối tượng với cấu trúc nhất định và hỗ trợ trong giai đoạn phát triển. Bạn có thể đặt tên khi có sự kết hợp đặc biệt của các biến bằng cách định nghĩa Interfaces và đảm bảo rằng chúng luôn đi cùng nhau.
* Classes: Typescript cung cấp một hệ thống class khá giống với các ngôn ngữ java, C# như abstract classes, chức năng kế thừa, setter/getters, interface implementations,...

- Không thể thay thế typescript hoàn toàn cho Js được, vì bản chất typescript chỉ là một công cụ để kiểm soát js một cách chặt chẽ hơn, sự kết hợp giữa typescript và ESLint tạo ra một rule chuẩn cho các dự án vừa và lớn, phù hợp cho việc nâng cấp, bảo trì code. typescript về cuối cùng vẫn phải biên dịch ra js để có thể chạy vì thế không thể thay thế ts cho js được.

5. Kể tên các hook của React thường được sử dụng nhất.

- useState : dùng để khai báo state trong component.
- useEffect: dùng để viết các xử lý khi rerender component, dựa vào dependence để có những xử lý phù hợp.(điều kiện để useEffect chạy là lần đầu tiên khi component didMount và khi một trong dependence có sự thay đổi)
- useMemo: Khá giống với useEffect nhưng có thể return về một giá trị nhất định dưới dạng một biến
  ví dụ: const numbers = useMemo(() => {
  const result = [1, 1];
  for (let i = 2; i < length; i++) {
  result[i] = result[i - 1] + result[i - 2];
  }
  return result;
  }, [length]);
- useCallback: Giống với useMemo nhưng có thể truyền vào các biến số và có khả năng trả về một Element có thể render trong React.
  ví dụ: const NumberItemRender = useCallback(({initValue}) => {
  const result = initValue || []
  for (let i = 2; i < length; i++) {
  result[i] = result[i - 1] + result[i - 2];
  }
  return <div>{result.join(', ')}</div>
  }, [length]);
  Câu hỏi thêm: Sự khác nhau giữa useMemo và useCallback.
  Khi khai báo useMemo phải khai báo ở dạng biến (đặt tên theo nguyên tắc đặt tên biến), không thể truyền thêm các đối số trực tiếp tại useMemo.
  Có thể khai báo useCallback dưới dạng một Element có thể render. Có thể truyền vào các đối số phù hợp và sử dụng biến như một component con.

6. Cơ chế hoạt động của redux
   Redux bao gồm 3 thành phần chính: Store, Reducers, và Action.

- Store là nơi lưu trữ trạng thái và chỉ có duy nhất 1 store trong một Redux.
- Reducers là nơi lưu trữ các state dưới dạng object, một store có thể có nhiều reducers khác nhau. Mỗi reducers cần khai báo initalValue để khởi tạo giá trị và cung cấp action xử lý thay đổi state.
- Action là các thao tác được cung cấp tại reducer. Action sẽ được gắn vào các event tại client và thực hiện gọi đến store thông qua các dispatch để thay đổi giá trị.
  (Ngoài ra Redux còn cung cấp các selector, có tác dụng lấy về trạng thái của store bao gồm các giá trị hiện tại của store dưới dạng object mà các key tương ứng là các reducerName).

7. Thế nào là restfulApi. Các thư viện hiện tại phổ biến thực hiện gọi api

- restfulApi là phương thức giao tiếp giữa Frontend với một bên khác được truyền tải qua HTTP dựa trên các phương thức như HTTP như GET, POST, DELETE,..vv đến một URL để xử lý dữ liệu. Dữ liệu được trả về có thể là một XML, json, hình ảnh, video,...
- Có thể gọi API thông qua thư viện axios hoặc sử dụng trực tiếp hàm fetch của js. Cả 2 đều có những ưu nhược điểm khác nhau và dựa trên nhu cầu của dự án mà có lựa chọn phù hợp.

8. Một vài điều về Js.

- Promise, Async/Await và callback
  Cả 3 đều là các hàm xử lý bất đồng bộ

* Callback là một hàm được truyền vào dưới dạng tham số được gọi để xử lý một số tác vụ nào đó (Tuy nhiên sẽ có thể xảy ra hiện tượng callback hell)
  // Callback hell là trường hợp một loạt các thao tác cần phải xử lý tuần tự và khiến cho đoạn mã trở nên khó đọc, khó theo dõi.
* Promise là một đối tượng đại diện cho sự hoàn thành hoặc thất bại. Hàm sẽ cung cấp cho chúng ta 2 phương thức để trả về kết quả là resolve và reject.
* Async/Await là cú pháp dựa trên Promises, cho phép viết đoạn mã bất đồng bộ mà trông giống như mã đồng bộ.

- Nếu trường hợp có nhiều api cần trả về kết quả cùng lúc và để tiết kiệm thời gian thì cần xử lý như thế nào.
  Sử dụng Promise.all để thực hiện nhiều xử lý bất đồng bộ song song, Hàm này sẽ kết thúc khi tất cả các lời hứa đều hoàn thành hoặc có ít nhất một lời hứa bị từ chối.
- Js là ngôn ngữ đơn luồng hay đa luồng?;
  Js là ngôn ngữ đơn luồng.
- Nêu các hàm xử lý với mảng:

* array.map()
* array.filter()
* array.some()
* array.reduce()
* array.slice()
* array.split()
* array.replace()
* array.join()

- Làm cách nào để dừng lại một vòng lặp duyệt qua hàm array.map()?

* Sử dụng throw
