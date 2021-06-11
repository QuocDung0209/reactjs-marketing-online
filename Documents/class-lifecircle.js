import React, { Component, PropTypes } from 'react';

class User extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        // Hàm này Thực hiện việc thiết lập state cho component

        // Trong React, bạn chỉ khởi tạo giá trị this.state một lần duy nhất, sau khi khởi tạo xong,
        // nếu bạn muốn cập nhật this.state, bạn phải dùng hàm this.setState.

        // Khi sử dụng this.setState, chính là kích hoạt danh sách các phương thức thuộc vòng đời của component
        // (shouldComponentUpdate, componentWillUpdate, render, componentDidUpdate).
        // Và cũng luôn nhớ rằng, this.setState là hàm async, nên truy cập this.state ngay sau khi setState
        // sẽ không nhận được giá trị mới của this.state.

        // Việc sử dụng super(props) là để có thể sử dụng this.props trong phạm vi hàm constructor này
    }

    componentWillMount() {
        // Thực hiện một số tác vụ, hàm này chỉ thực hiện 1 lần duy nhất

    }
    componentDidMount() {
        // Thực hiện một số tác vụ, hàm này chỉ thực hiện 1 lần duy nhất
        // Hàm này rất hữu dụng khi bạn làm việc thêm với Map, bởi vì map chỉ render được 
        // khi có node (id) trong DOM 
        // Có thể gọi API, khởi tạo form giống ngOnInit trong Angular
        // Nói tóm lại, hàm này được gọi để thông báo component đã tồn tại trên DOM, 
        // từ đó các thao tác trên DOM sẽ có thể thực hiện bình thường đối với component này
    }
    componentWillReceiveProps(nextProps) {
        // Hàm này thực hiện liên tục mỗi khi props thay đổi
        // (1) Sử dụng để thay đổi trạng thái (state) của component phụ thuộc props
        // (2) Sử dụng các kết quả, khởi tạo biến có tính chất async. Ví dụ: Khởi tạo Google Map Api, đây là quá trình async,
        // do vậy, bạn không thể biết được khi nào khởi tạo xong, thì khi khởi tạo xong có thể truyền xuống component thông qua
        // props, và từ đó bạn có thể khởi tạo các dịch vụ khác.
        // Code mẫu:
        //# if(nextProps.mapLoaded){ //props.mapLoaded khởi tạo false
        //#     let googleMaps = this.props.googleMaps ||
        //#         (window.google && // eslint-disable-line no-extra-parens
        //#         window.google.maps) ||
        //#         this.googleMaps;

        //#     if (!googleMaps) {
        //#         console.error(// eslint-disable-line no-console
        //#          'Google map api was not found in the page.');
        //#         return;
        //#     }
        //#     this.googleMaps = googleMaps;

        //#     this.autocompleteService = new googleMaps.places.AutocompleteService();
        //#     this.geocoder = new googleMaps.Geocoder();
        //# } 
    }
    shouldComponentUpdate(nextProps, nextState) {
        // Hàm này thực hiện khi state và props thay đổi
        // Hàm này sẽ trả về kết quả true/false, bạn sẽ cần sử dụng đến hàm này để xử lý xem có cần update component không
    }

    componentWillUpdate(nextProps, nextState) {
        // Hàm này thực hiện dựa vào kết quả của hàm trên (shouldComponentUpdate)
        // Nếu hàm trên trả về false, thì React sẽ không gọi hàm này
    }
    componentDidUpdate(prevProps, prevState) {
        // Hàm này thực hiện sau khi component được render lại, từ kết quả của componentWillUpdate
    }
    componentWillUnmount() {
        // Hàm này thực hiện một lần duy nhất, khi component sẽ unmount
        // Hàm này hữu dụng khi bạn cần xoá các timer không còn sử dụng
    }

    render() {
        return (
            <div>
                {/**thực hiện việc render */}
            </div>
        );
    }
}

User.propTypes = {
    //Khai báo kiểu biến cho props
};
User.defaultProps = {
    //Khai báo giá trị mặc định cho props
}
export default User;


// ==> Vòng đời của component

// ====> Khởi tạo Component
// Lần lượt các hành động sau để khởi tạo component:

// - Khởi tạo Class (đã thừa kế từ class Component của React)
// - Khởi tạo giá trị mặc định cho Props (defaultProps)
// - Khởi tạo giá trị mặc định cho State (trong hàm constuctor)
// - Gọi hàm componentWillMount()
// - Gọi hàm render()
// - Gọi hàm componentDidMount()


// ====> Khi State thay đổi
// - Cập nhật giá trị cho state
// - Gọi hàm shouldComponentUpdate()
// - Gọi hàm componentWillUpdate() – với điều kiện hàm trên return true
// - Gọi hàm render()
// - Gọi hàm componentDidUpdate()


// ====> Khi Props thay đổi
// - Cập nhật giá trị cho props
// - Gọi hàm componentWillReceiveProps()
// - Gọi hàm shouldComponentUpdate()
// - Gọi hàm componentWillUpdate() – với điều kiện hàm trên return true
// - Gọi hàm render()
// - Gọi hàm componetDidUpdate()


// ====> Khi Unmount component
// - Gọi hàm componentWillUnmount() => Xử lý trước khi destroy component