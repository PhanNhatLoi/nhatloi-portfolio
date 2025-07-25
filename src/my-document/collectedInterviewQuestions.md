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

* Hỗ trợ static typing: Chức năng đặc biệt chỉ có ở Typescript, có thể khai báo kiểu cho biến và giúp trình biên dịch giảm thiểu được tỷ lệ gán sai của giá trị. Nếu bạn bỏ qua khai báo kiểu thì code của bạn sẽ tự động phát hiện.(Khi Typescript được biên dịch thành javascript thì mọi khai báo kiểu sẽ bị xóa)
* Classes: Typescript cung cấp một hệ thống class khá giống với các ngôn ngữ java, C# như abstract classes, chức năng kế thừa, setter/getters, interface implementations,...

- Không thể thay thế typescript hoàn toàn cho Js được, vì bản chất typescript chỉ là một công cụ để kiểm soát js một cách chặt chẽ hơn, sự kết hợp giữa typescript và ESLint tạo ra một rule chuẩn cho các dự án vừa và lớn, phù hợp cho việc nâng cấp, bảo trì code. typescript về cuối cùng vẫn phải biên dịch ra js để có thể chạy vì thế không thể thay thế ts cho js được.

- Một vài thứ về type và interface:
- Về cơ bản interface và type để để định nghĩa cấu trúc cho một object, tuy nhiên tùy vào mục đích sử dụng mà có các định nghĩa khác nhau.

* Đối với các class, object hoặc cần sử dụng tính chất kế thừa thì ưu tiên sử dụng interface
* Đối với các cấu trúc phức tạp hơn nên ưu tiên sử dụng type (Union, Intersection,Tuple, function,...)

- Union type: là kiểu dữ liệu 1 trong số. Ví dụ: type gender = "male" | "femail"
- Intersection: là kiểu dữ liệu giao. Ví dụ:
  type A = { name: string };
  type B = { age: number };

type C = A & B; (Gần giống với kết thừa trong classes)

- function type: là kiểu function. Ví dụ: type Sum = (a:number, b:number) => number
- Tuple type: là kiểu bộ cố định phần tử, kiểu phần tử.
  Ví dụ: let tuple: [string, number]. Ở đây [string, number] là tuple. Kiểu dữ liệu bắt buộc là mảng 2 phần tử, phần tử thứ nhất là string và phần tử thứ 2 là number.

5. Kể tên các hook của React thường được sử dụng nhất.
   Các hook của React được tạo và sử dụng trong function component với mục đích hạn chế việc rerender component không cần thiết từ đó tối ưu hiệu năng.

- useState : dùng để khai báo state trong component.
- useEffect: dùng để viết các xử lý khi rerender component, dựa vào dependences để có những xử lý phù hợp.(điều kiện để useEffect chạy là lần đầu tiên khi component didMount và khi một trong dependence có sự thay đổi)
- useMemo: là một hook trả về một giá trị và sẽ cập nhật lại kết quả dựa vào dependences. Nên dùng cho các phép tính nhiều logic hoặc giá trị phụ thuộc
  ví dụ: const numbers = useMemo(() => {
  const result = [1, 1];
  for (let i = 2; i < length; i++) {
  result[i] = result[i - 1] + result[i - 2];
  }
  return result;
  }, [length]);

- useCallback: Là một hook khá tương tự useMemo nhưng trả về function.
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
  Ngoài ra Promise.allSettled cũng có thể xử lý nhiều bất đồng bộ song song, sự khác biệt là nếu có các hàm thực thi bị lỗi thì hàm vẫn không bị dừng lại
- Js là ngôn ngữ đơn luồng hay đa luồng?;
  Js là ngôn ngữ đơn luồng.
  Lý do js là ngôn ngữ đơn luồng nhưng vẫn có thể xử lý song song nhiều việc cùng lúc.
  Thực chất JS không làm hết, nó sẽ nhờ đến Trình duyệt (hoặc NodeJs) làm giúp.
  JS chỉ làm một việc trong 1 lúc, nhưng JS sẽ sử dụng cơ chế Event Loop để điều phối công việc.
  Điều phối công việc là sao:
  Giả sử ta có hàm thực thi:
  console.log("Bắt đầu");
  setTimeout(() => {
  console.log("Đợi 3 giây xong");
  }, 3000);
  console.log("Kết thúc");

  Kết quả in ra sẽ là:
  Bắt đầu
  Kết thúc
  Đợi 3 giây xong

  Vì sao dòng lệnh console.log("Đợi 3 giây xong"); nằm trên nhưng lại in ra cuối cùng. Theo cơ chế Event loop thì công việc sẽ được điều phối như sau
  console.log("Bắt đầu"); được đưa vào Call Stack. lúc này đang chưa có gì trong stack nên thực thi luôn
  setTimeout(() => {
  console.log("Đợi 3 giây xong");
  }, 3000);
  Thực thi và gặp settimeOut (Js hiểu đây là việc bất đồng bộ) đẩy sang cho browser thực hiện việc đợi 3s
  console.log("Kết thúc"); được đưa vào Call Stack. lúc này đang chưa có gì trong stack nên thực thi luôn
  sau khi 3s kết thúc, browser đẩy console.log("Đợi 3 giây xong"); vào Call Stack và thực hiện

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

Các biện pháp tối ưu hiệu năng:

- Sử dụng tối ưu các hook của React useMemo, useCallback, useRef(khi cần lưu giá trị mà không render lại UI, thường sử dụng với animation, dom ref, cache, timeout,...), memo để hạn chế render component không cần thiết.
- Tránh memory leak hoặc chạy lại effect không cần thiết thì cần dọn dẹp useEffect đúng cách.
- Dùng các thẻ rỗng (<></> hoặc React.Fragment) để giảm dom không cần thiết (gom nhóm và không cần truyền bất cứ thuộc tính nào cho thẻ).
- Tách nhỏ component việc tách nhỏ sẽ khiến các component chỉ rerender lại nếu bên trong phần thân component có sự thay đổi về props hoặc state. (ngoài ra giúp tái sử dụng, dễ quản lý - enhancement code, giảm code trùng lặp => giảm dung lượng bunlde)
- Tránh truyền object/array vào component
  ⚠️ Sai cách
  <Child count={()=> a+b } />

  ✅ Đúng cách
  const options = useMemo(() => return a+b , []);
  <Child options={options} />
  ==> Việc này tương tự ý nghĩa của việc tách nhỏ component, việc truyền vào một object hoặc 1 function mới vào component sẽ phải thực thi lại, dù nội dung giống nhau. Giả sử truyền từ ngoài vào một function tính toán kết quả a + b, và component này lặp lại 5 item trong list, thì mỗi component sẽ phải tính a + b đủ 5 lần dù phép tính là giống nhau.
  Tương tự thì nên thay thế cssinline bằng CSS modules, styled-components, hoặc class CSS.
  nhưng với options là useMemo thì chỉ cần tính 1 lần và kết quả đó sẽ được truyền thẳng vào như một prop không đổi.

- Dùng key đúng cách khi render list
  React không render lại toàn bộ danh sách mà chỉ cập nhật đúng phần tử bị thay đổi, giúp tái sử dụng DOM node để tăng tốc.
  nên sử dụng các giá trị unique để làm key, không nên sử dụng index (biến phụ thuộc vào list) để làm key(index sẽ bị thay đổi đối với phần tử khi list bị xóa hoặc thêm)

- Sử dụng lazy, Suspense để phân tách dữ liệu.
  Đối với các api trả về lượng lớn dữ liệu mà trên thực tế lượng dữ liệu này sẽ không thể hiển thị hết trên UI thì việc lấy về tất cả là không cần thiết nhưng lại ép buộc Component render lượng lớn dữ liệu (có thể xảy ra tình trạng tràn dữ liệu).
  thực hiện các phương pháp phân trang và lazyloading trước khi cần đến dữ liệu.

### Tài liệu tổng hợp phỏng vấn kỹ thuật Front-End (ReactJS / NextJS) – Junior to Middle

---

#### **Phần 1 – JavaScript Cơ Bản và Nâng Cao**

**Câu hỏi 1:** Giải thích sự khác nhau giữa `var`, `let`, và `const`. Khi nào nên dùng mỗi loại?

- `var`: function-scoped, có hoisting, dễ gây bug.
- `let`: block-scoped, không hoisting.
- `const`: block-scoped, không thể gán lại (reassign), nhưng với object/array có thể thay đổi nội dung.

**Câu hỏi 2:** Khi nào `this` trỏ về `window` và khi nào trỏ về đối tượng cụ thể?

- Trong function thường (không ở strict mode): `this` trỏ về `window`.
- Trong method gọi qua object: `this` trỏ về chính object đó.
- Trong arrow function: `this` kế thừa từ phạm vi cha.

---

#### **Phần 2 – ReactJS**

**Câu hỏi 3:** Controlled vs Uncontrolled Component

- Controlled: Input được điều khiển qua state, dùng `value` và `onChange`.
- Uncontrolled: Input dùng ref, giá trị lấy trực tiếp từ DOM.

**Câu hỏi 4:** `React.memo` và `useMemo` khác nhau như thế nào?

- `React.memo`: Bọc component để tránh render lại khi props không đổi.
- `useMemo`: Memoize giá trị tính toán, tránh tính lại khi deps không đổi.

**Câu hỏi 5:** `useCallback` là gì? Khi nào nên dùng?

- Dùng để memoize hàm callback, đặc biệt khi truyền xuống component con.
- Sai deps sẽ dẫn tới bug (logic sai hoặc render không tối ưu).

**Câu hỏi 8:** Nếu 1 component bị render quá nhiều lần gây chậm UI, xử lý thế nào?

- Kiểm tra logic và dependencies của hook.
- Tách nhỏ component.
- Dùng `React.memo`, `useMemo`, `useCallback` hợp lý.
- Tối ưu key trong list.
- Dùng phân trang, lazy load, virtual list.
- Dùng debounce/throttle cho input hoặc hành động liên tục.

---

#### **Phần 3 – Next.js**

**Câu hỏi 6:** Phân biệt `getServerSideProps`, `getStaticProps`, và `getInitialProps`

- `getStaticProps`: Build-time, dùng cho nội dung tĩnh.
- `getServerSideProps`: Server-side mỗi lần request.
- `getInitialProps`: Chạy ở cả client và server, không hỗ trợ static optimization.

**Câu hỏi 7:** Phân biệt App Router và Pages Router (Next.js 13+)

- Pages Router:

  - Tất cả route nằm trong `/pages`.
  - Dùng `getServerSideProps`, `getStaticProps`, `_app.tsx`, `_document.tsx`.

- App Router:

  - Dùng `/app`, mỗi route gồm `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`.
  - Hỗ trợ layout lồng nhau.
  - Hỗ trợ Server Component, Streaming.
  - Dùng `"use client"` để chỉ định component chạy ở client.

---
