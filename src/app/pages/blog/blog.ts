import { Component } from '@angular/core';
import { Blogs } from "../../components/blog-component/blogs/blogs";
import { Featuress } from "../../components/feature-component/featuress/featuress";

@Component({
  selector: 'app-blog',
  imports: [Blogs, Featuress],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

}
