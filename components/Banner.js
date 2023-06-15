import React from "react";
import styles from "../src/styles/Banner.module.css"
import Image from "next/image";


//create div with header, paragraph and button,
//wrap this div in another div to enable styling later
//add another div below 1st closing div for image  - 1st div will be on left, 2nd div on right
//give divs class names using {} to use with css modules (not CSS)- as it allows ...... 
//create new css file in Styles
//import styles from styles/Banner.module.css
//in {} add styles. before container - to import the css for container because using modules
//in 2nd div for text - on left side - class name banner_text
//in 3rd div for image- on right side - class name styles.banner_image
//use span to separate wording that will be red
//class name in spans and button for css
//add css in styles - mobile first
 

function Banner() {
  return <div className={styles.container}>
  {/* <div className={styles.banner_exclamation}><Image src="/exclamation.png" width={40} height={40}/></div> */}
  <button className={styles.button_exclamation}>!</button>
  <div className={styles.banner_text}>
    <h1>Touch typing training for 
children and adults</h1>
<p><span className={styles.banner_span1}>Save time and work smarter </span> with one of the most valuable skills you or your children can learn.</p>
<p><span className={styles.banner_span2} >Touch typing</span> is learning to type quickly and accurately without looking at your hands using all your fingers on specific keys. <span className={styles.banner_span3}>Join our course</span> and gain a hugely beneficial skill for life.</p>
<button className={styles.banner_button}>Our Courses</button>
</div>

<div className={styles.banner_image}><Image src="/typist.png" width={170} height={170}/></div>
{/* <div classname={styles.banner_letter_e}><Image src='/letter_e.png'width={40} height={40}/>
</div> */}
<button className={styles.button_e}>E
</button>
  </div>;
}

export default Banner;
