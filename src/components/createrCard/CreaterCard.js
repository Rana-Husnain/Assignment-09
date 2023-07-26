import React from 'react'
import styles from "@/styles/createrCard/CreaterCard.module.css"
import Image from 'next/image'

export default function CreaterCard(proops) {
    return (
        <>
            <div className={`col-md-3 col-sm-12 ${styles.createrCard}`}>
                <div className={styles.createrCardSubDiv}>
                    <div className={styles.label}>
                        <span>{proops.num}</span>
                    </div>
                    <Image
                        src={proops.createrimg}
                        alt="Picture of the author"
                    />
                    <h5 className={styles.createrCardHeading}>{proops.cardtitle}</h5>
                    <span className={styles.spanStyling}>Total Sales:</span> &nbsp;
                    <span>34.53 ETH</span>
                </div>

            </div>
        </>
    )
}
