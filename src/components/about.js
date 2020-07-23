import React from 'react';
import { Link } from "react-router-dom"

const about = () => {
    return(
        <div className='about bg-warning'>
            <h1>My About Page</h1>
            <h2 className='text-center m-3'><Link to='/'>Home</Link></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nulla purus, auctor sit amet magna ac, viverra ullamcorper lorem. Mauris et quam lorem. Ut non risus dui. Proin ut venenatis felis, sit amet varius risus. Nullam ultricies pharetra varius. Suspendisse vehicula ipsum sed elit rutrum, a auctor mi accumsan. Nam gravida, leo et facilisis tincidunt, turpis leo elementum risus, et tempus diam eros mollis lectus. Nullam finibus lectus massa, maximus iaculis eros egestas pellentesque. Duis eleifend nisl sapien, eu commodo nunc consectetur at. Fusce vel tortor sodales, luctus libero et, posuere leo. Integer cursus, est at accumsan viverra, diam ante fermentum nulla, vel pellentesque justo mauris eu massa. Proin mollis tristique enim.</p>

            <p>Donec in ante condimentum, porta justo nec, pellentesque tellus. Ut in lobortis dolor. Nulla ante mi, dictum ut laoreet vitae, euismod luctus dolor. Maecenas lorem massa, tincidunt fringilla orci vitae, molestie tristique enim. Vivamus et risus id lacus maximus consectetur. Duis aliquet, massa id tincidunt egestas, eros quam pretium arcu, quis fringilla nibh metus at orci. Duis sapien mi, varius sit amet porttitor sit amet, viverra sagittis velit. Donec gravida tellus vitae diam rutrum consequat. Morbi purus augue, molestie id volutpat et, malesuada non nulla. Donec euismod a nibh ut sodales.</p>
            
            <p>Vivamus eleifend urna massa, vitae pretium ipsum tempor sit amet. Phasellus semper aliquet magna quis varius. Integer odio felis, imperdiet vel lobortis et, viverra nec orci. Morbi vestibulum scelerisque lacus, placerat blandit dui sollicitudin et. Etiam nec scelerisque sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi efficitur, lacus ut euismod condimentum, nisi quam posuere erat, eu imperdiet augue risus eget est. Aenean auctor fermentum neque, pulvinar vulputate est hendrerit sed. Praesent viverra elit nisi, eget dignissim mauris aliquam non.</p>
            
            <p>Pellentesque aliquam ultricies augue, et porta ligula rutrum ut. In gravida turpis sit amet porttitor condimentum. Donec vestibulum nisi in metus malesuada, eu aliquet mauris aliquet. Integer euismod sodales tellus ut tincidunt. Aenean porttitor euismod tempor. Cras in suscipit est. Aenean laoreet faucibus purus, sit amet mollis odio. Integer bibendum consequat turpis quis imperdiet. Quisque enim lorem, consectetur quis turpis a, condimentum suscipit leo. Nam et blandit urna, ut placerat enim.</p>
            
            <p>Praesent nec pharetra dolor. Donec tortor arcu, consectetur et consequat sit amet, aliquam fermentum velit. Vivamus nec nisi enim. Aliquam pellentesque lectus sit amet convallis dapibus. Curabitur ex dui, egestas nec malesuada vel, fermentum ut metus. Curabitur placerat, velit quis placerat accumsan, turpis elit ultrices nisi, eget lacinia arcu urna a metus. Duis venenatis augue sit amet pharetra tristique. Pellentesque accumsan eu velit hendrerit tincidunt. Integer molestie ut augue a luctus. Praesent vulputate, justo non pellentesque maximus, purus ante consectetur odio, aliquam pharetra libero felis aliquam est. Maecenas semper, diam id elementum finibus, lectus nulla vehicula enim, sed porta enim sem bibendum enim</p>
        </div>
    )
}

export default about;