import React, { useState } from 'react';
import { ShoppingBag, Search, Heart, MapPin, Phone, Mail, Menu, X, Star, ShieldCheck, Truck, RefreshCw, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutSubmitted, setCheckoutSubmitted] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  // প্রিমিয়াম ও আকর্ষণীয় প্রোডাক্ট তালিকা
  const products = [
    {
      id: 1,
      name: 'Royal Crimson Velvet Three-Piece',
      category: 'Clothing',
      price: 3500,
      rating: 4.9,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600',
      tag: 'Best Seller',
      desc: 'এক্সক্লুসিভ ডিজাইনার থ্রি-পিস, আরামদায়ক ও উৎসবমুখর লুকের জন্য সেরা।'
    },
    {
      id: 2,
      name: 'Korean Hyaluronic Acid Facial Serum',
      category: 'Skincare',
      price: 1200,
      rating: 5.0,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600',
      tag: 'Trending Glow',
      desc: 'ত্বককে ডিপ হাইড্রেট করে এবং দেয় প্রাকৃতিকভাবে গ্লোয়িং ও চির তরুণ লুক।'
    },
    {
      id: 3,
      name: 'Embroidered Festive Kurti Collection',
      category: 'Clothing',
      price: 1800,
      rating: 4.8,
      reviews: 94,
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=600',
      tag: 'New Arrival',
      desc: 'আধুনিক কাটিং ও চমৎকার এমব্রয়ডারি কাজের আকর্ষণীয় কুর্তি।'
    },
    {
      id: 4,
      name: 'Organic Matte Sunscreen SPF 50+',
      category: 'Skincare',
      price: 950,
      rating: 4.9,
      reviews: 310,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600',
      tag: 'Must Have',
      desc: 'ইউভি (UV) রশ্মি থেকে সুরক্ষা এবং মেট ফিনিশ লুকের জন্য সেরা সানস্ক্রিন।'
    },
    {
      id: 5,
      name: 'Pastel Chiffon Party Gown',
      category: 'Clothing',
      price: 4200,
      rating: 5.0,
      reviews: 75,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=600',
      tag: 'Exclusive',
      desc: 'যেকোনো পার্টি বা অনুষ্ঠানে রাজকীয় উপস্থিতির জন্য প্যাস্টেল শিফন গাউন।'
    },
    {
      id: 6,
      name: 'Nourishing Vitamin C Night Cream',
      category: 'Skincare',
      price: 1450,
      rating: 4.7,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1608248597359-f5383a152e72?auto=format&fit=crop&q=80&w=600',
      tag: 'Popular',
      desc: 'রাতেরবেলা ত্বকের পুষ্টি জোগায় এবং ব্রাইটনেস ফিরিয়ে আনে।'
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-[#FFF8F9] text-gray-800 font-sans selection:bg-rose-200 selection:text-rose-900">
      
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-rose-600 via-[#D87093] to-pink-500 text-white text-xs sm:text-sm py-2.5 px-4 text-center font-medium shadow-sm tracking-wide flex items-center justify-center space-x-2">
        <Sparkles className="w-4 h-4 animate-pulse" />
        <span>ঈদ ও পূজা স্পেশাল অফার! যেকোনো অর্ডারে ফ্রি হোম ডেলিভারি ও আকর্ষণীয় গিফট!</span>
        <Sparkles className="w-4 h-4 animate-pulse" />
      </div>

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center border-2 border-white shadow-md group-hover:scale-105 transition">
              <span className="text-xl font-bold font-serif text-white tracking-widest">MV</span>
            </div>
            <div>
              <span className="text-2xl font-serif font-extrabold tracking-wide text-gray-900">Mou's Vanity</span>
              <p className="text-xs text-[#D87093] font-bold tracking-wider">Clothing & Skincare</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
            <a href="#home" className="hover:text-[#D87093] transition font-semibold">হোম</a>
            <a href="#shop" className="hover:text-[#D87093] transition font-semibold">সকল পণ্য</a>
            <a href="#clothing" onClick={() => setActiveCategory('Clothing')} className="hover:text-[#D87093] transition font-semibold">পোশাক</a>
            <a href="#skincare" onClick={() => setActiveCategory('Skincare')} className="hover:text-[#D87093] transition font-semibold">প্রসাধনী</a>
            <a href="#contact" className="hover:text-[#D87093] transition font-semibold">যোগাযোগ</a>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button className="text-gray-600 hover:text-[#D87093] transition hidden sm:block p-2 rounded-full hover:bg-rose-50">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-700 hover:text-[#D87093] transition bg-rose-100/70 hover:bg-rose-200 p-2.5 rounded-full flex items-center shadow-sm"
            >
              <ShoppingBag className="w-5 h-5 text-[#D87093]" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D87093] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md animate-bounce">
                  {cart.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-rose-50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-rose-100 px-6 py-4 space-y-3 shadow-xl">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-semibold py-2 border-b border-gray-100">হোম</a>
            <a href="#shop" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-semibold py-2 border-b border-gray-100">সকল পণ্য</a>
            <a href="#clothing" onClick={() => { setActiveCategory('Clothing'); setMobileMenuOpen(false); }} className="block text-gray-700 font-semibold py-2 border-b border-gray-100">পোশাক (Clothing)</a>
            <a href="#skincare" onClick={() => { setActiveCategory('Skincare'); setMobileMenuOpen(false); }} className="block text-gray-700 font-semibold py-2 border-b border-gray-100">প্রসাধনী (Skincare)</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-700 font-semibold py-2">যোগাযোগ</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-b from-rose-100/60 via-pink-50/30 to-[#FFF8F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-center md:text-left z-10">
            <span className="inline-flex items-center space-x-2 bg-rose-200/80 text-[#D87093] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>প্রিমিয়াম কালেকশন ২০২৬</span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-gray-900 leading-tight">
              আপনার সৌন্দর্য ও আভিজাত্যের <span className="text-[#D87093] drop-shadow-sm">সঠিক ঠিকানা</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              আধুনিক ফ্যাশন স্টেটমেন্ট এবং কোরিয়ান জেনুইন স্কিনকেয়ারের এক অপূর্ব সংমিশ্রণ। আপনার প্রতিদিনের আত্মবিশ্বাস বাড়াতে আমরা আছি সাথে।
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <a href="#shop" className="bg-gradient-to-r from-rose-600 to-[#D87093] text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-rose-300 hover:scale-105 transition text-center flex items-center justify-center space-x-2">
                <span>শপিং শুরু করুন</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="border-2 border-rose-300 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:border-[#D87093] hover:text-[#D87093] transition text-center bg-white/70 backdrop-blur-sm">
                শপ লোকেশন দেখুন
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="absolute -inset-2 bg-gradient-to-tr from-rose-400 to-pink-300 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative w-72 h-96 sm:w-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-1 transition duration-500">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=700" 
                alt="Mou's Vanity Model" 
                className="w-full h-full object-cover hover:scale-110 transition duration-700"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-white py-8 border-y border-rose-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3 p-2">
            <Truck className="w-8 h-8 text-[#D87093] shrink-0" />
            <div>
              <h4 className="font-bold text-gray-800 text-xs sm:text-sm">দ্রুত হোম ডেলিভারি</h4>
              <p className="text-[11px] text-gray-500">সারাদেশে কুরিয়ার সার্ভিস</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2">
            <ShieldCheck className="w-8 h-8 text-[#D87093] shrink-0" />
            <div>
              <h4 className="font-bold text-gray-800 text-xs sm:text-sm">১০০% অরিজিনাল</h4>
              <p className="text-[11px] text-gray-500">গ্যারান্টিযুক্ত স্কিনকেয়ার</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2">
            <RefreshCw className="w-8 h-8 text-[#D87093] shrink-0" />
            <div>
              <h4 className="font-bold text-gray-800 text-xs sm:text-sm">সহজ রিটার্ন পলিসি</h4>
              <p className="text-[11px] text-gray-500">৭ দিনের বদলানোর সুযোগ</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2">
            <ShoppingBag className="w-8 h-8 text-[#D87093] shrink-0" />
            <div>
              <h4 className="font-bold text-gray-800 text-xs sm:text-sm">ক্যাশ অন ডেলিভারি</h4>
              <p className="text-[11px] text-gray-500">হাতে পেয়ে মূল্য পরিশোধ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Catchy UI */}
      <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-3 mb-12">
          <span className="text-[#D87093] font-bold text-sm tracking-widest uppercase">Our Collection</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-gray-900">ট্রেন্ডিং কালেকশন ও প্রসাধনী</h2>
          <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base">আপনার পছন্দ অনুযায়ী সেরা পোশাক এবং স্কিনকেয়ার আইটেম বেছে নিন এক ক্লিকেই।</p>
          
          {/* Category Filter Buttons */}
          <div className="flex justify-center space-x-3 pt-6 flex-wrap gap-y-2">
            {['All', 'Clothing', 'Skincare'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-7 py-3 rounded-full text-sm font-bold transition shadow-sm ${
                  activeCategory === cat 
                    ? 'bg-gradient-to-r from-rose-600 to-[#D87093] text-white shadow-md transform scale-105' 
                    : 'bg-white text-gray-600 border border-rose-200 hover:border-[#D87093] hover:text-[#D87093]'
                }`}
              >
                {cat === 'All' ? '✨ সকল পণ্য' : cat === 'Clothing' ? '👗 পোশাক (Clothing)' : '🌿 প্রসাধনী (Skincare)'}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid - Device Friendly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-rose-100 flex flex-col justify-between group transform hover:-translate-y-1.5">
                <div>
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-rose-50">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-[#D87093] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md">
                      {product.tag}
                    </span>
                    
                    {/* Wishlist Heart Button */}
                    <button 
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-md text-gray-600 hover:text-rose-600 transition"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>

                    {/* Rating Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm text-amber-500 flex items-center space-x-1 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{product.rating}</span>
                      <span className="text-gray-400 font-normal">({product.reviews})</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <span className="text-[11px] font-bold text-[#D87093] uppercase tracking-wider bg-rose-50 px-2.5 py-1 rounded-md">
                      {product.category}
                    </span>
                    <h3 className="font-serif font-bold text-gray-900 text-lg group-hover:text-[#D87093] transition line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                      {product.desc}
                    </p>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[#D87093] font-extrabold text-2xl">
                        ৳ {product.price.toLocaleString('bn-BD')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-rose-600 to-[#D87093] hover:from-rose-700 hover:to-rose-800 text-white py-3.5 rounded-2xl font-bold transition duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg active:scale-95"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>কার্টে যোগ করুন</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cart Drawer / Sidebar Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 animate-in slide-in-from-right duration-300">
            
            <div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h3 className="text-xl font-serif font-bold text-gray-900 flex items-center space-x-2">
                  <ShoppingBag className="w-6 h-6 text-[#D87093]" />
                  <span>আপনার শপিং কার্ট ({cart.length})</span>
                </h3>
                <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-600 p-1">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-20 space-y-4">
                  <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-[#D87093]">
                    <ShoppingBag className="w-10 h-10" />
                  </div>
                  <p className="text-gray-500 font-medium">আপনার কার্টটি বর্তমানে খালি রয়েছে।</p>
                  <button onClick={() => setIsCartOpen(false)} className="bg-[#D87093] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-sm hover:bg-rose-700 transition">
                    পণ্য দেখুন
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-gray-100 max-h-[50vh] overflow-y-auto my-4 pr-1">
                  {cart.map((item, index) => (
                    <div key={index} className="py-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-xl border border-rose-100" />
                        <div>
                          <h4 className="font-semibold text-sm text-gray-800 line-clamp-1">{item.name}</h4>
                          <p className="text-[#D87093] font-bold text-sm">৳ {item.price.toLocaleString('bn-BD')}</p>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(index)} className="text-red-400 hover:text-red-600 p-2">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-gray-100 pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                  <span>মোট মূল্য:</span>
                  <span className="text-[#D87093]">৳ {totalPrice.toLocaleString('bn-BD')}</span>
                </div>

                {checkoutSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl text-center font-medium text-sm flex items-center justify-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                    <span>অভিনন্দন! আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।</span>
                  </div>
                ) : (
                  <button 
                    onClick={() => setCheckoutSubmitted(true)}
                    className="w-full bg-[#D87093] hover:bg-rose-700 text-white py-3.5 rounded-2xl font-bold transition shadow-lg text-center"
                  >
                    অর্ডার কনফার্ম করুন (Checkout)
                  </button>
                )}
              </div>
            )}

          </div>
        </div>
      )}

      {/* Footer with Correct Client Address */}
      <footer id="contact" className="bg-gray-900 text-white pt-16 pb-12 mt-20 border-t border-rose-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-800 pb-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-wide text-rose-300">Mou's Vanity</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              আপনার আধুনিক ফ্যাশন ও জেনুইন স্কিনকেয়ারের বিশ্বস্ত পার্টনার। প্রিমিয়াম কোয়ালিটি এবং আস্থার সাথে আমরা আছি আপনাদের পাশে।
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-rose-300">দ্রুত লিংক</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition">হোম পেজ</a></li>
              <li><a href="#shop" className="hover:text-white transition">সকল প্রোডাক্ট</a></li>
              <li><a href="#clothing" onClick={() => setActiveCategory('Clothing')} className="hover:text-white transition">পোশাক কালেকশন</a></li>
              <li><a href="#skincare" onClick={() => setActiveCategory('Skincare')} className="hover:text-white transition">স্কিনকেয়ার পণ্য</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-rose-300">স্টোর লোকেশন ও যোগাযোগ</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span>Eastern Housing Block-D, Road-04, Holding-238, Shop-04, Mirpur, Dhaka, Bangladesh[cite: 1]</span>
              </p>
              <p className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-400 shrink-0" />
                <span>+880 1XXXXXXXXX</span>
              </p>
              <p className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-400 shrink-0" />
                <span>support@mousvanity.com</span>
              </p>
            </div>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 Mou's Vanity. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0">Designed with Passion for Client Preview</p>
        </div>
      </footer>

    </div>
  );
}