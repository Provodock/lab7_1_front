import React, { useState } from 'react';

function MainContent() {
    const [elements, setElements] = useState({});
    const [imageWidth, setImageWidth] = useState(500);

    const handleElementClick = (index) => {
        setElements(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleDoubleClick = (index) => {
        setElements(prev => ({
            ...prev,
            [index]: false
        }));
    };

    const getElementClass = (index) => {
        if (!elements[index]) return '';
        return (index + 1) % 5 === 0 ? 'lighted' : 'highlighted';
    };

    const handleImageAdd = () => setImageWidth(500);
    const handleImageIncrease = () => setImageWidth(prev => prev * 1.1);
    const handleImageDecrease = () => setImageWidth(prev => prev * 0.9);
    const handleImageRemove = () => setImageWidth(0);

    return (
        <div className="container">
            <section>
                <h3 onClick={() => handleElementClick(0)}
                    onDoubleClick={() => handleDoubleClick(0)}
                    className={getElementClass(0)}>
                    Освіта:
                </h3>
                <ul>
                    <li onClick={() => handleElementClick(1)}
                        onDoubleClick={() => handleDoubleClick(1)}
                        className={getElementClass(1)}>
                        Ліцей "Гарант", м. Кременчук
                    </li>
                    <li onClick={() => handleElementClick(2)}
                        onDoubleClick={() => handleDoubleClick(2)}
                        className={getElementClass(2)}>
                        НТУУ "КПІ", м. Київ
                    </li>
                </ul>
            </section>

            <section>
                <h3 onClick={() => handleElementClick(3)}
                    onDoubleClick={() => handleDoubleClick(3)}
                    className={getElementClass(3)}>
                    Хоббі:
                </h3>
                <ul>
                    <li onClick={() => handleElementClick(4)}
                        onDoubleClick={() => handleDoubleClick(4)}
                        className={getElementClass(4)}>
                        Спорт
                    </li>
                    <li onClick={() => handleElementClick(5)}
                        onDoubleClick={() => handleDoubleClick(5)}
                        className={getElementClass(5)}>
                        Музика
                    </li>
                    <li onClick={() => handleElementClick(6)}
                        onDoubleClick={() => handleDoubleClick(6)}
                        className={getElementClass(6)}>
                        Комп'ютерні ігри
                    </li>
                    <li onClick={() => handleElementClick(7)}
                        onDoubleClick={() => handleDoubleClick(7)}
                        className={getElementClass(7)}>
                        Головоломки
                    </li>
                </ul>
            </section>

            <section>
                <h3 onClick={() => handleElementClick(8)}
                    onDoubleClick={() => handleDoubleClick(8)}
                    className={getElementClass(8)}>
                    Улюблені фільми:
                </h3>
                <ol>
                    <li onClick={() => handleElementClick(9)}
                        onDoubleClick={() => handleDoubleClick(9)}
                        className={getElementClass(9)}>
                        Пробудження, 2016
                    </li>
                    <li onClick={() => handleElementClick(10)}
                        onDoubleClick={() => handleDoubleClick(10)}
                        className={getElementClass(10)}>
                        Явище, 2008
                    </li>
                    <li onClick={() => handleElementClick(11)}
                        onDoubleClick={() => handleDoubleClick(11)}
                        className={getElementClass(11)}>
                        Чому він?, 2016
                    </li>
                    <li onClick={() => handleElementClick(12)}
                        onDoubleClick={() => handleDoubleClick(12)}
                        className={getElementClass(12)}>
                        З міркувань совісті, 2016
                    </li>
                </ol>
            </section>

            <section>
                <h3>Улюблене місто - Одеса</h3>
                <p onClick={() => handleElementClick(13)}
                   onDoubleClick={() => handleDoubleClick(13)}
                   className={getElementClass(13)}>
                    Одеса --- місто в Україні. Третє за кількістю мешканців місто країни після Києва та Харкова.
                    Розташоване на узбережжі Чорного моря. Найбільший морський торговий порт держави.
                    Основа економіки --- транспортні перевезення, машинобудівна, хімічна, нафтопереробна,
                    харчова та легка промисловості. Має 37 закладів вищої освіти, шість театрів, вісім кінотеатрів,
                    філармонія, цирк, музеї, галереї тощо.
                </p>

                <img
                    src={require('./Odeca.png')}
                    alt="Одеса"
                    style={{ width: `${imageWidth}px` }}
                />

                <div className="image-buttons">
                    <button onClick={handleImageAdd}>Додати зображення</button>
                    <button onClick={handleImageIncrease}>Збільшити зображення</button>
                    <button onClick={handleImageDecrease}>Зменшити зображення</button>
                    <button onClick={handleImageRemove}>Видалити зображення</button>
                </div>
            </section>
        </div>
    );
}

export default MainContent;
