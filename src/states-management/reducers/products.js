const initialState = {
    productList: [
        {
            id: 1,
            imageUrl: "https://salt.tikicdn.com/cache/w64/ts/product/05/5c/4e/f421195819cdc7d31401c3f17e2edcd6.jpg",
            name: 'Tinh Dầu Xông Phòng',
            author: "Kenji Nguyen",
            date: "16/06/2021",
            rating: 4.5,
            comments: 154,
            summary: 'Combo 3 Tinh Dầu Sả Chanh + Tinh Dầu Bạc Hà + Tinh Dầu Oải Hương (Lavender) - Tinh Dầu Xông Phòng Nguyên Chất Giúp Thư Giãn, Đuổi Muỗi Và Thơm Phòng (3 chai 10ML)',
            prices: "98.000 ₫",
            sales: '-70%',
        },
        {
            id: 2,
            imageUrl: "https://salt.tikicdn.com/cache/w64/ts/product/46/31/d4/e3778e7d381586f60d7567d0dc2c1c9c.jpg",
            name: 'Bàn Học Bàn Làm Việc Kết Hợp Kệ Sách Thương Hiệu IGEA',
            author: "Kenji Nguyen",
            date: "16/06/2021",
            rating: 3,
            comments: 4,
            summary: `Kích thước: Mặt bàn dài 1,2m sâu 55cm cao 74cm
            Chất liệu: Gỗ MDF nhập khẩu phủ melamin chống xước chống nước dễ dàng vệ sinh.
            Màu sắc: Trắng - Đen
            Công năng: Sử dụng làm bàn làm việc, bàn vi tính, bàn học tại nhà. Bàn làm việc tại văn phòng. Sản phẩm có cấu tạo thông minh giúp tiết kiệm tối đa diện tích.
            Cấu tạo: Lắp ráp `,
            prices: "516.000 ₫",
            sales: '-50%',
        },
        {
            id: 3,
            imageUrl: "https://salt.tikicdn.com/cache/w64/ts/product/5a/e2/ee/fb098bc8168c80ea9ab4c3725695028e.jpg",
            name: 'Ghế Quỳ Đệm Lưng Cao - Ghế chân quỳ cho phòng họp, văn phòng - G4010',
            author: "Kenji Nguyen",
            date: "16/06/2021",
            rating: 4.8,
            comments: 42,
            summary: 'Ghế Quỳ đệm lưng cao G4010 thuộc dòng ghế nhân viên chủ yếu được dùng trong các văn phòng, phòng họp. Dựa trên thói quen của nhân viên công sở, ghế được thiết kế nhằm giảm thiểu tối đa khó khăn của nhân viên. Đây là một trong những sản phẩm được giới văn phòng ưa thích hiện nay.',
            prices: "660.000 ₫",
            sales: '-31%',
        },
        {
            id: 4,
            imageUrl: "https://cdn01.dienmaycholon.vn/filewebdmclnew/public/picture/product/product17986/product_17986_1.png",
            name: 'Samsung',
            author: "Kenji Nguyen",
            date: "16/06/2021",
            rating: 3,
            comments: 4,
            summary: `Trải Nghiệm Hoàn Hảo Với Màn Hình Lớn Ấn Tượng
            Đắm say từng khung hình sống động và chân thực đến không ngờ với màn hình tràn viền vô cực Infinity-O 6.5 inch từ Galaxy A21s. Thỏa thích xem video, chơi game và livestream với chất lượng HD+ đỉnh cao cùng tỷ lệ khung hình lớn ấn tượng.`,
            prices: "7 000 000 VND",
            sales: '-50%',
        }
    ],
    banners: [
        {
            id: 1,
            imageUrl: 'https://salt.tikicdn.com/cache/w824/ts/banner/a2/97/9a/ea887bb502bdca1a2e21089b6d7da6b8.png.jpg',
            link: '',
        },
        {
            id: 2,
            imageUrl: 'https://salt.tikicdn.com/cache/w824/ts/banner/33/71/28/8de559403ced1458df9085c396d6b0d6.png.jpg',
            link: '',
        },
        {
            id: 3,
            imageUrl: 'https://salt.tikicdn.com/cache/w824/ts/banner/0c/43/28/81a13153a45ec5e7560ae67827553f23.png.jpg',
            link: '',
        },
    ],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;