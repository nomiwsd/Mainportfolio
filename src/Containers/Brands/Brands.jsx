// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// import { AppWrap, MotionWrap } from '../../Wrapper';
// import { urlFor, client } from '../../Client';
// import '../Testimonials/Testimonials.scss';
// const Brands = () => {
//     const [brands, setBrands] = useState([]);
//     useEffect(() => {
//         const brandsQuery = '*[_type == "brands"]';
    
//         client.fetch(brandsQuery).then((data) => {
//           setBrands(data);
//         });
//       }, []);
//   return (
//     <div>
//       <div className="app__testimonial-brands app__flex">
//         {brands.map((brandsite) => (
//           <motion.div
//             whileInView={{ opacity: [0, 1] }}
//             transition={{ duration: 0.5, type: 'tween' }}
//             key={brandsite._id}
//           >
    
//      {brandsite.brandimageurl &&  <img src={urlFor(brandsite.brandimageurl)} alt={brandsite.name} /> 
//           }   {/* {brands.authorImage && (
//     <img
//     src={urlFor(brands.authorImage)}
//     alt=""
//   />
// )} */}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AppWrap(
//     MotionWrap(Brands, 'app__testimonial'),
//     'testimonial',
//     'app__primarybg',
//   );