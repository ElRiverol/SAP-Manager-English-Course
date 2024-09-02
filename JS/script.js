var list = new Array();
    var pageList = new Array();
    var currentPage = 1;
    var numberPerPage = 3;
    var numberOfPages = 0;

    function makeList() {
        function person(LinkImage, ImageAlt, BlogTitle, Description, Link, unit){
            this.LinkImage = LinkImage;
            this.ImageAlt = ImageAlt;
            this.BlogTitle = BlogTitle;
            this.Description = Description;
            this.Link = Link;
            this.unit = unit;
        }
        let blog1 = new person("./Assets/Images/post-1.png", "mlmml", "Unit  1:<br>Technical language and business communication", "The learner will be able to effectively communicate using appropriate technical language and business communication phrases in a simulated business scenario, with no reliance on dictionaries, translation tools, or prepared notes.", "./module1.html", 0)
        let blog2 = new person("./Assets/Images/post-2.png", "mlmml", "Module 1", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis hic illum minima ratione adipisci earum id quibusdam cumque ipsum!", "./module1.html", 1)
        let blog3 = new person("./Assets/Images/post-3.png", "mlmml", "Module 2", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis hic illum minima ratione adipisci earum id quibusdam cumque ipsum!", "./module2.html", 2)
        let blog4 = new person("./Assets/Images/post-4.png", "mlmml", "Unit  2:<br>Etiquette & professional", "By the end of the unit, learners will be able to accurately express petitions, needs, suggestions though Email and other formal means of communication using adequate language for a professional environment with appropriate tech, business and work-environment etiquette.", "./module3.html", 0)
        let blog5 = new person("./Assets/Images/post-5.png", "mlmml", "Module 1", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis hic illum minima ratione adipisci earum id quibusdam cumque ipsum!", "./module3.html", 1)
        let blog6 = new person("./Assets/Images/post-6.png", "mlmml", "Module 2", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis hic illum minima ratione adipisci earum id quibusdam cumque ipsum!", "./module4.html", 2)
        let blog7 = new person("./Assets/Images/post-7.png", "mlmml", "Unit 3:<br>Project Management Vocabulary", "By the end of this unit, the learner will be able to understand and apply terminology for project management in a business focused environment which includes planning, executing and reporting tasks to correctly explain the technical process of a project.", "./module5.html", 0)
        let blog8 = new person("./Assets/Images/post-8.png", "mlmml", "Module 1", "By the end of this unit, the learner will be able to understand and apply terminology for project management in a business focused environment which includes planning, executing and reporting tasks to correctly explain the technical process of a project.", "./module5.html", 1)
        let blog9 = new person("./Assets/Images/post-9.png", "mlmml", "Module 2", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis hic illum minima ratione adipisci earum id quibusdam cumque ipsum!", "./module6.html", 2)
        let blog10 = new person("./Assets/Images/post-10.png", "mlmml", "Unit  4:<br>Deadline Negotiation & Leadership Communication", "By the end of this unit, the learner will be able to use their learned bargaining skills for properly negotiating project deadlines with their clients as well as with their own team while maintaining the correct level of courtesy, professionalism and leadership with both.", "./module7.html", 0)
        let blog11 = new person("./Assets/Images/post-11.png", "mlmml", "Module 1", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis hic illum minima ratione adipisci earum id quibusdam cumque ipsum!", "./module7.html", 1)
        let blog12 = new person("./Assets/Images/post-12.png", "mlmml", "Module 2", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis hic illum minima ratione adipisci earum id quibusdam cumque ipsum!", "./module8.html", 2)
        
        list.push(blog1);
        list.push(blog2);
        list.push(blog3);
        list.push(blog4);
        list.push(blog5);
        list.push(blog6);
        list.push(blog7);
        list.push(blog8);
        list.push(blog9);
        list.push(blog10);
        list.push(blog11);
        list.push(blog12);
        
        numberOfPages = getNumberOfPages();
    }
        
    function getNumberOfPages() {
        return Math.ceil(list.length / numberPerPage);
    }

    function nextPage() {
        currentPage += 1;
        loadList();
    }

    function previousPage() {
        currentPage -= 1;
        loadList();
    }

    function firstPage() {
        currentPage = 1;
        loadList();
    }

    function lastPage() {
        currentPage = numberOfPages;
        loadList();
    }

    function loadList() {
        var begin = ((currentPage - 1) * numberPerPage);
        var end = begin + numberPerPage;

        pageList = list.slice(begin, end);
        drawList();
        check();
    }
        
    function drawList() {
        document.getElementById("unit").innerHTML = "";
        document.getElementById("topic").innerHTML = "";
        
        for (let r = 0; r < pageList.length; r++)
        {

            // LinkImage, ImageAlt, BlogTitle, Description, Link

            let obj = pageList[r];
            let article = document.createElement('article');
            let imagePost = document.createElement('div');
            let postName = document.createElement('a');
            let description = document.createElement('div');
            
            
            
            
            imagePost.innerHTML = `<img src='${obj.LinkImage}' alt='${obj.ImageAlt}'/>`;
            
            postName.innerHTML = obj.BlogTitle;
            postName.className = 'blog-title';
            postName.setAttribute("href", `${obj.Link}`);
            postName.className = "blog-button hvr-pulse-grow";
            
            description.innerHTML = obj.Description;
            description.className = 'description';
            
            article.appendChild(imagePost);
            article.appendChild(postName);
            article.appendChild(description);
            
            if (obj.unit == 0){
                article.className = "unit";
                document.getElementById("unit").appendChild(article);
            }
            else if(obj.unit == 1){
                article.className = "topic1";
                document.getElementById("topic").appendChild(article);
            }
            else{
                article.className = "topic2";
                document.getElementById("topic").appendChild(article);
            }
            
        }
    }

    function check() {
        document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
        document.getElementById("previous").disabled = currentPage == 1 ? true : false;
        document.getElementById("first").disabled = currentPage == 1 ? true : false;
        document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
    }

    function load() {
        makeList();
        loadList();
    }
        
    window.onload = load;