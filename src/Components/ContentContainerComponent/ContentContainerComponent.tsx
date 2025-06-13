import "./ContentContainerComponent.css"
/*Компонент для отображения текущей открытой страницы*/
const ContentContainerComponent: React.FC = ()=>{
    return <div className="AllSpace FlexCenter">
        <span className="NoContentText">
            Нет активных вкладок
        </span>
        </div>
}
export default ContentContainerComponent