
const HomeBanner = () => {
    return (
        <>
            <div style={styles.banner}>
                <div style={styles.text}>
                    Your dream job is just a click away
                </div>
                <div style={styles.text}>
                    Have any questions?+91 8512827174
                </div>
                <div className="flex gap-4">
                    <a href="https://www.facebook.com/people/JobHubworld/61575148695953/" target='_blank' className="w-10 h-10 flex items-center justify-center rounded-full bg-[#008000] text-white">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/jobhub-world-5559a7361/' target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#008000] text-white">
                        <i classNampe="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href='https://www.instagram.com/jobhub_world?igsh=a2hsb3dmdDV1azYw' target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#008000] text-white">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

const styles = {
    banner: {
        padding: '20px',
        backgroundColor: '#008000',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: '16px',
        color: '#fff',
    },
}
export default HomeBanner;