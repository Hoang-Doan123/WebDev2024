class ValueError extends Error {
    constructor(message) {
        super(message)
        this.name = 'ValueError'
    }
}

export default class DrawCircleChart {

    /**
     * @param {HTMLElement | string} parentElement
     * @param {string[][]} circlesClasses
     * @param {number} outerCircleRadius
     * @param {number} innerCircleRadius
     * @param {string[]} colorRepresentations
     * @param {number[]} percentages
     * @param {string} content,
     * @param {string[]} footerClasses,
     * @param {string} bottomText
     * @param {string[]} circleAnalysisFooterClasses,
     * @param {string[]} categories
    */
    constructor(
        parentElement,
        circlesClasses,
        outerCircleRadius,
        innerCircleRadius,
        colorRepresentations,
        percentages,
        content,
        footerClasses,
        bottomText,
        circleAnalysisFooterClasses,
        categories
    ) {
        if (!(parentElement instanceof HTMLElement || typeof parentElement === 'string')) {
            throw new TypeError("Element must be an HTML element or a string represents its classes or id.");
        }
        if (
            outerCircleRadius < 0 
            || innerCircleRadius < 0 
            || outerCircleRadius == 0
        ) {
            throw new ValueError("The radiuses must be positive.")
        }
        if (outerCircleRadius < innerCircleRadius) {
            throw new ValueError("The inner circle radius must be shorter than the outer circle radius.")
        }
        if (percentages.reduce((a, b) => a + b, 0) != 100) {
            throw new ValueError("The total percentages must be equal to 100")
        }
        this.parentElement = parentElement;
        this.circlesClasses = circlesClasses;
        this.outerCircleRadius = outerCircleRadius;
        this.innerCircleRadius = innerCircleRadius;
        this.colorRepresentations = colorRepresentations;
        this.percentages = percentages;
        this.content = content;
        this.footerClasses = footerClasses
        this.bottomText = bottomText;
        this.circleAnalysisFooterClasses = circleAnalysisFooterClasses;
        this.categories = categories;
    }

    /**
     * Build the circle chart with given parameters.
     */
    build() {
        let parElement;
        parElement = this.#verifyElement(parElement, this.parentElement);
        console.log(parElement.children)
        
        let merged = this.#getMergedArray()

        const root = document.documentElement

        // Create an outer circle element for the parent element (parElement)
        const circleElement = this.#createElement(parElement, "div", this.circlesClasses[0], {
            width: `${this.outerCircleRadius}px`,
            height: `${this.outerCircleRadius}px`,
            position: 'relative',
            backgroundImage: `conic-gradient(${merged.join(", ")})`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transform: 'rotate(0deg) scale(0.5)',
            animation: 'rotateAppear 3s east-out forwards'
        })

        this.#createElement(circleElement, "div", this.circlesClasses[1], {
            width: `${this.innerCircleRadius}px`,
            height: `${this.innerCircleRadius}px`,
            zIndex: 1,
            backgroundColor: getComputedStyle(root).getPropertyValue("--main-background"),
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transform: 'rotate(0deg) scale(0.5)',
            animation: 'rotateAppear 3s east-out forwards'
        })

        const circleInnerElement = circleElement.children[0]
        const innerText = this.#createElement(
            circleInnerElement,
            "h4",
            [".circle-inner-text"],
            {
                maxWidth: `${this.innerCircleRadius / 2}px`,
                textsAlign: 'center',
                color: getComputedStyle(root).getPropertyValue("--main-text"),
            }
        )
        innerText.textContent = this.content
        
        if (this.bottomText != "") {
            const circleChartFooter = this.#createElement(
                parElement,
                "div",
                this.footerClasses,
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            )
            const circleChartFooterText = this.#createElement(
                circleChartFooter, 
                "p", 
                ["chart-footer-text"], 
                {
                    color: getComputedStyle(root).getPropertyValue("--main-text")
                }
            )
            circleChartFooterText.textContent = this.bottomText
        }
    }

    #createElement(parElement, tag, classes, properties) {
        const div = document.createElement(tag)
        if (classes != null) {
            classes.forEach(cl => div.classList.add(cl))
            writeStyle(classes.map(cl => `.${cl}`).join(""), properties)
        } else {
            Object.assign(div.style, properties)
        }
        if (parElement instanceof HTMLElement) {
            parElement.appendChild(div)
        }
        return div;
    }

    /**
     * Verify if the element exists.
     * 
     * @param {null} parElement
     * @param {HTMLElement | string} element
     * @return {HTMLElement}
    */
    #verifyElement(referElement, element) {
        if (element instanceof HTMLElement) {
            referElement = element
        } else if (typeof element === 'string') {
            if (document.getElementById(element) != null) {
                referElement = document.getElementById(element)
            } else if (document.querySelector(`.${element}`) != null) {
                referElement = document.querySelector(`.${element}`)
            } else {
                throw new Error("No element matches the string classes/id.")
            }
        } else {
            throw new Error("Value 'element' must be a string or an HTML element.")
        }
        return referElement
    }

    /**
     * Return an array represents the colors and their ranges.
     * 
     * @return {Array}
    */
    #getMergedArray() {
        let percentageRanges = [0]
        let cur = 0
        for (let i = 0; i < this.percentages.length; i++) {
            cur += this.percentages[i]
            percentageRanges.push(cur)
        }

        let merged = this.colorRepresentations.map((value, index) => {
            return `${value} ${percentageRanges[index]}% ${percentageRanges[index + 1]}%`
        })

        return merged
    }

    createBottomFooter(categoryFragmentClasses) {
        const circleAnalysisFooter = document.querySelector(
            this.circleAnalysisFooterClasses.map(cl => `.${cl}`).join("")
        )
        this.categories.forEach((category, index) => {
            const categoryFragment = this.#createElement(
                null,
                "div",
                [...categoryFragmentClasses, `category-${index + 1}`],
                {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "upAppear 1.5s ease-in-out"
                }
            )
            const calledCategory = document.querySelector(`.category-${index + 1}`)
            const color = this.#createElement(
                calledCategory,
                "div",
                [".color-representation"],
                {
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                    backgroundColor: this.colorRepresentations[index],
                }
            )
            const categoryName = this.#createElement(
                calledCategory,
                "div",
                null,
                {
                    padding: "0 6px",
                    color: getComputedStyle(root).getPropertyValue("--title-color"),
                }
            )
            categoryName.textContent = category
            categoryFragment.appendChild(color)
            categoryFragment.appendChild(categoryName)
            circleAnalysisFooter.appendChild(categoryFragment)
        })
    }
}

/**
 * Write the specific element's properties to the <style> tag.
 * 
 * @param {HTMLElement} element
 * @param {object} elementProperties
*/
export function writeStyle(element, elementProperties) {
    let handlingProperties = ""
    Object.keys(elementProperties).forEach(key => {
        handlingProperties += `${key}: ${elementProperties[key]};`
    })
    let style = document.getElementsByTagName("style")[0]
    if (style == null) {
        style = document.createElement("style")
        style.innerHTML = `
            ${element} {
            ${handlingProperties}
            }
        `
        document.getElementsByTagName("head")[0].appendChild(style)
    } else {
        style.innerHTML += `
            ${element} {
            ${handlingProperties}
            }
        `
    }
}

export function addKeyframes(keyframes, transformPercentages, properties) {
    if (transformPercentages.length != properties.length) {
        throw new ValueError("The transform percentages and properties must be the same length.")
    }
    let style = document.getElementsByTagName("style")[0]
    if (style == null) {
        style = document.createElement("style")
        style.innerHTML = `
            @keyframes ${keyframes} {
                ${transformPercentages.map((value, index) => {
                    return `${value} {
                        ${Object.keys(properties[index]).map(key => {
                            return `${key}: ${properties[index][key]}`
                        }).join("; ")}
                    }`
                })}
            }
        `
        document.getElementsByTagName("head")[0].appendChild(style)
    } else {
        style.innerHTML += `
            @keyframes ${keyframes} {
                ${transformPercentages.map((value, index) => {
                    return `${value} {
                        ${Object.keys(properties[index]).map(key => {
                            return `${key}: ${properties[index][key]}`
                        }).join("; ")}
                    }`
                })}
            }
        `
    }
}