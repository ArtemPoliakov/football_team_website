import classes from './../styles/index_styles.module.css'

const FactSection = ({ children }) => {
    return (
        <li className={classes.fact}>
            <section>
                <p>{children}</p>
            </section>
        </li>
    )
}

export default FactSection;